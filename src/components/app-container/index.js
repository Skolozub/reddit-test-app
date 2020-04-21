import PropTypes from 'prop-types';
import React from 'react';

import styles from './app-container.module.scss';

function AppContainer({ style, children }) {
  return (
    <div className={ styles.appContainer } style={ style }>
      {children}
    </div>
  );
}

AppContainer.propTypes = {
  style   : PropTypes.object,
  children: PropTypes.oneOfType([
    PropTypes.node, PropTypes.func,
  ]).isRequired,
};

AppContainer.defaultProps = {
  style: {},
};

export default AppContainer;