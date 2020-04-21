import PropTypes from 'prop-types';
import React from 'react';

import styles from './loader-dot.module.scss';

function LoaderDot({ size, animationDelay }) {
  return (
    <div
      className={ styles.loaderDot }
      style={ { width: size, height: size, animationDelay } }
    />
  );
}

LoaderDot.propTypes = {
  size: PropTypes.oneOfType([
    PropTypes.string, PropTypes.number,
  ]),
  animationDelay: PropTypes.string,
};

LoaderDot.defaultProps = {
  size          : 10,
  animationDelay: 0,
};

export default LoaderDot;