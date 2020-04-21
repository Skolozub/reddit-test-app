import { createAction, createReducer } from '@reduxjs/toolkit';
import { OrderedMap } from 'immutable';

/* actions */
export const loadArticles = createAction('LOAD_ARTICLES');
export const putArticles = createAction('PUT_ARTICLES');
export const putArticlesError = createAction('PUT_ARTICLES_ERROR');
export const showArticle = createAction('SHOW_ARTICLE');
export const likeArticle = createAction('LIKE_ARTICLE');
export const deleteArticle = createAction('DELETE_ARTICLE');

const articlesCache = localStorage.getItem('articlesCache');
const showedArticles = localStorage.getItem('articlesShowed');

const initialState = {
  showed: OrderedMap(JSON.parse(showedArticles)) || OrderedMap(),
  cached: JSON.parse(articlesCache) || {},
  status: {
    isLoading: false,
    isSuccess: false,
    isFailure: false,
  },
  message: '',
};

/* reducer */
export const articleReducer = createReducer(initialState, {
  [ loadArticles.type ]: state => ({
    ...state,
    status: {
      ...state.status,
      isLoading: true,
      isSuccess: false,
      isFailure: false,
    },
  }),
  [ putArticles.type ]: (state, action) => ({
    ...state,
    cached: {
      ...state.cached,
      [ action.payload.subreddit ]: {
        data    : action.payload.data,
        cachedAt: action.payload.cachedAt,
      },
    },
    status: {
      ...state.status,
      isLoading: false,
      isSuccess: true,
    },
  }),
  [ putArticlesError.type ]: (state, action) => ({
    ...state,
    status: {
      ...state.status,
      isLoading: false,
      isFailure: true,
    },
    message: action.payload.message,
  }),
  [ showArticle.type ]: (state, action) => ({
    ...state,
    showed: state.showed.set(`id${Date.now()}`, action.payload),
    status: {
      ...state.status,
      isLoading: false,
    },
  }),
  [ likeArticle.type ]: (state, action) => ({
    ...state,
    showed: state.showed.update(
      action.payload,
      props => ({ ...props, isLiked: !props.isLiked }),
    ),
  }),
  [ deleteArticle.type ]: (state, action) => ({
    ...state,
    showed: state.showed.delete(action.payload),
  }),
});