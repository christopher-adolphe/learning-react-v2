import React from 'react';
import PropTypes from 'prop-types';
import styles from './Button.module.css';

function Button({ type = 'button', label, onHandleClick }) {
  return (
    <button className={ styles.button } type={ type } onClick={ onHandleClick }>{ label }</button>
  );
}

Button.propTypes = {
  type: PropTypes.string,
  label: PropTypes.string.isRequired,
  onHandleClick: PropTypes.func
};

export default Button;
