import React from 'react';
import PropTypes from 'prop-types';

import styles from './Backdrop.module.css';

function Backdrop({ children, onDismiss }) {
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
