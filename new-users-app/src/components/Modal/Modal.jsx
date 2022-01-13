import React from 'react';
import PropTypes from 'prop-types';
import Button from '../shared/Button/Button';
import styles from './Modal.module.css';

function Modal({ title, body, buttonLabel }) {
  const handleDismiss = () => {
    console.log('handleDismiss called');
  };

  return (
    <div className={ styles.modal } >
      <div className={ styles['modal__dialog'] }>
        <div className={ styles['modal__content'] }>
          <div className={ styles['modal__header'] }>
            <h3>{ title }</h3>
          </div>

          <div className={ styles['modal__body'] }>
            <p>{ body }</p>
          </div>

          <div className={ styles['modal__footer'] }>
            <Button label={ buttonLabel } onHandleClick={ handleDismiss } />
          </div>
        </div>
      </div>
    </div>
  );
}

Modal.propTypes = {
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  buttonLabel: PropTypes.string.isRequired
};

export default Modal;
