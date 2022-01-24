import React from 'react';
import PropTypes from 'prop-types';

import styles from './Button.module.css';

function Button({ children, type = 'button', className, isDisabled = false, onHandleClick }) {
  const classes = className ? `${styles.button} ${styles[className]}` : `${styles.button}`;

  return (
    <button className={ classes } type={ type } onClick={ onHandleClick } disabled={ isDisabled }>{ children }</button>
  );
}

Button.propTypes = {
  type: PropTypes.string,
  className: PropTypes.string,
  isDisabled: PropTypes.bool,
  onHandleClick: PropTypes.func.isRequired
};

export default Button;
