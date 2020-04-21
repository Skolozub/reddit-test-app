import PropTypes from 'prop-types';
import React from 'react';

import styles from './ping-pong-wrapper.module.scss';

function PingPongWrapper({ time, style, children }) {
  return (
    <div
      className={ styles.pingPong }
      style={ { ...style, animationDuration: time } }
    >
      {children}
    </div>
  );
}

PingPongWrapper.propTypes = {
  time    : PropTypes.string,
  style   : PropTypes.object,
  children: PropTypes.oneOfType([
    PropTypes.node, PropTypes.func,
  ]).isRequired,
};

PingPongWrapper.defaultProps = {
  time : '10s',
  style: {},
};

export default PingPongWrapper;