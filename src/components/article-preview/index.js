import cn from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

import styles from './article-preview.module.scss';

function ArticlePreview({ linkTo, title, before, after, style }) {
  return (
    <div className={ styles.wrapper } style={ style }>
      {before}
      <a
        className={ cn(styles.link, { [ styles.isBefore ]: before }) }
        href={ linkTo }
        rel="noreferrer noopener"
        target="_blank"
      >
        {title}
      </a>
      {after}
    </div>
  );
}

ArticlePreview.propTypes = {
  linkTo: PropTypes.string.isRequired,
  title : PropTypes.string.isRequired,
  before: PropTypes.node,
  after : PropTypes.node,
  style : PropTypes.object,
};

ArticlePreview.defaultProps = {
  before: undefined,
  after : undefined,
  style : {},
};

export default ArticlePreview;