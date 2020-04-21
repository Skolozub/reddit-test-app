import { call, put, select, takeEvery } from 'redux-saga/effects';

import { getArticlesData, getRandomArticle, hasExpiredCache } from '../utils';
import {
  deleteArticle,
  likeArticle,
  loadArticles,
  putArticles,
  putArticlesError,
  showArticle } from './articles';

function fetchArticles(subreddit) {
  return fetch(`https://www.reddit.com/r/${subreddit}.json`).then(response =>
    response.json());
}

function* showRandomArticle(articles) {
  const randomArticle = getRandomArticle(articles);
  if (randomArticle) {
    const article = {
      ...randomArticle,
      isLiked: false,
    };

    yield put(showArticle(article));
  }
}

function* workerFetchArticles({ payload: subreddit }) {
  const articlesSelector = store => store.articles.cached[ subreddit ] || {};
  const cachedArticles = yield select(articlesSelector);

  if (hasExpiredCache(cachedArticles.cachedAt)) {
    const response = yield call(fetchArticles, subreddit);

    if (response.error) {
      yield put(putArticlesError({ message: response.message }));
    } else {
      const responseData = getArticlesData(response);

      yield put(putArticles({
        data    : getArticlesData(response),
        cachedAt: Date.now(),
        subreddit,
      }));

      yield call(showRandomArticle, responseData);
    }
  } else {
    yield call(showRandomArticle, cachedArticles.data);
  }
}

function* workerSaveShowedArticles() {
  const newShowedArticles = yield select(store => store.articles.showed);
  localStorage.setItem('articlesShowed', JSON.stringify(newShowedArticles));
}

function* workerSaveCacheArticles() {
  const newCachedArticles = yield select(store => store.articles.cached);
  localStorage.setItem('articlesCache', JSON.stringify(newCachedArticles));
}

export function* watcherArticles() {
  yield takeEvery(loadArticles.type, workerFetchArticles);
  yield takeEvery(putArticles.type, workerSaveCacheArticles);
  yield takeEvery(
    [ showArticle.type, likeArticle.type, deleteArticle.type ],
    workerSaveShowedArticles,
  );
}