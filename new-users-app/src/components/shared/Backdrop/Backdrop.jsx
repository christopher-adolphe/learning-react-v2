import React from 'react';
import PropTypes from 'prop-types';

import styles from './Backdrop.module.css';

function Backdrop({ onDismiss, children }) {
  return (
    <div className={ styles.backdrop } onClick={ onDismiss }>
      { children }
    </div>
  );
}

Backdrop.propTypes = {
  onDismiss: PropTypes.func.isRequired
};

export default Backdrop;
