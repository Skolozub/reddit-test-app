
import PropTypes from 'prop-types';
import React from 'react';

import Button from '../button';
import styles from './ping-pong-buttons.module.scss';
import PingPongWrapper from './ping-pong-wrapper';;

function PingPongButtons({ buttons, isDisabled, onClick }) {
  return (
    <div className={ styles.wrapper }>
      {buttons.map(button => (
        <PingPongWrapper key={ button.id } style={ { margin: '0.5rem 0' } }>
          <Button
            isDisabled={ isDisabled }
            size="large"
            onClick={ () => onClick(button.id) }
          >
            {button.text}
          </Button>
        </PingPongWrapper>
      ))}
    </div>
  );
}

PingPongButtons.propTypes = {
  buttons   : PropTypes.array.isRequired,
  isDisabled: PropTypes.bool,
  onClick   : PropTypes.func,
};

PingPongButtons.defaultProps = {
  isDisabled: false,
  onClick   : ()=>{},
};

export default PingPongButtons;
