import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import ArticlesList from '../components/articles-list';
import Loader from '../components/loader';
import { deleteArticle, likeArticle } from '../redux/articles';

function ArticlesListContainer() {
  const dispatch = useDispatch();
  const { showed, status } = useSelector(state => state.articles);

  function onDeleteArticleHandler(articleId) {
    dispatch(deleteArticle(articleId));
  }

  function onLikedArticleHandler(articleId) {
    dispatch(likeArticle(articleId));
  }

  return (
    <>
      <Loader isLoading={ status.isLoading } />
      <ArticlesList
        articles={ showed }
        onDeleteArticle={ onDeleteArticleHandler }
        onLikedArticle={ onLikedArticleHandler }
      />
    </>
  );
}

export default ArticlesListContainer;
