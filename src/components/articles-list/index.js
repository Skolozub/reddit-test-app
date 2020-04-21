import { List } from 'immutable';
import PropTypes from 'prop-types';
import React from 'react';
import { FixedSizeList } from 'react-window';

import ArticlePreview from '../article-preview';
import Like from '../like';
import Trash from '../trash';

function ArticlesList({ articles, onLikedArticle, onDeleteArticle }) {
  const list = List(articles);

  return (
    <FixedSizeList
      height={ 500 }
      itemCount={ list.size }
      itemSize={ 40 }
      width="100%"
    >
      {({ index, style }) => {
        const [ articleId, articleProps ] = list.get(index);

        return (
          <ArticlePreview
            key={ articleId }
            before={ (
              <>
                <Like
                  isLiked={ articleProps.isLiked }
                  onLiked={ () => onLikedArticle(articleId) }
                />
                <Trash onDelete={ () => onDeleteArticle(articleId) } />
              </>
            ) }
            linkTo={ articleProps.url }
            style={ style }
            title={ articleProps.title }
          />
        );
      }}
    </FixedSizeList>
  );
}

ArticlesList.propTypes = {
  articles       : PropTypes.object.isRequired,
  onLikedArticle : PropTypes.func.isRequired,
  onDeleteArticle: PropTypes.func.isRequired,
};

export default ArticlesList;