import React from 'react';
import { FiX } from 'react-icons/fi';

import { Backdrop, Button } from '..';

import styles from './Modal.module.css';


function Modal({ children }) {
  const handleDismissModal = () => {
    console.log('handleDismissModal called...');
  };

  const handleClearCart = () => {
    console.log('handleClearCart called...');
  };

  const handleOrderMeal = () => {
    console.log('handleOrderMeal called...');
  };

  return (
    <Backdrop onDismiss={ handleDismissModal }>
      <div className={ styles.modal }>
        <header className={ styles['modal__header'] }>
          <h3 className={ styles['modal__title'] }>Modal Title</h3>

          <Button className="button--icon" onHandleClick={ handleDismissModal }>
            <FiX size="1.75em" />
          </Button>
        </header>
        
        <div className={ styles['modal__content'] }>{ children }</div>

        <footer className={ styles['modal__footer'] }>
          <Button className="button--bordered" onHandleClick={ handleClearCart }>Clear</Button>

          <Button onHandleClick={ handleOrderMeal }>Order</Button>
        </footer>
      </div>
    </Backdrop>
  );
}

export default Modal;
