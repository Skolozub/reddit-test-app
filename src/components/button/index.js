import cn from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

import styles from './button.module.scss';

function Button({ type, size, onClick, isDisabled, children }) {
  return (
    // eslint-disable-next-line react/button-has-type
    <button
      className={ cn(styles.button, styles[ size ], { [ styles.disabled ]: isDisabled }) }
      disabled={ isDisabled }
      type={ type }
      onClick={ onClick }
    >
      {children}
    </button>
  );
}

Button.propTypes = {
  type      : PropTypes.oneOf([ 'button', 'submit', 'reset' ]),
  size      : PropTypes.oneOf([ 'small', 'medium', 'large' ]),
  isDisabled: PropTypes.bool,
  children  : PropTypes.oneOfType([
    PropTypes.node, PropTypes.func,
  ]).isRequired,
  onClick: PropTypes.func,
};

Button.defaultProps = {
  type      : 'button',
  size      : 'medium',
  isDisabled: false,
  onClick   : () =>{},
};

export default Button;