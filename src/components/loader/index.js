import PropTypes from 'prop-types';
import React from 'react';

import LoaderDot from './loader-dot';
import styles from './loader.module.scss';

function Loader({ size, isLoading, numberOfDots }) {
  const height = parseInt(size) + 20;

  return (
    <div className={ styles.loader } style={ { height } }>
      {isLoading && (
        [ ...new Array(numberOfDots) ].map((_, index) => {
          const delay = `${index / (numberOfDots * 2)}s`;

          return (
            <LoaderDot
              // eslint-disable-next-line react/no-array-index-key
              key={ index }
              animationDelay={ delay }
              size={ size }
            />
          );
        })
      )}
    </div>
  );
}

Loader.propTypes = {
  size: PropTypes.oneOfType([
    PropTypes.string, PropTypes.number,
  ]),
  isLoading   : PropTypes.bool,
  numberOfDots: PropTypes.number,
};

Loader.defaultProps = {
  size        : 10,
  isLoading   : false,
  numberOfDots: 3,
};

export default Loader;