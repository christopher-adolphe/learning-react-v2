import React, { Fragment, useContext } from 'react';
import PropTypes from 'prop-types';
import { FiX } from 'react-icons/fi';

import AppContext from '../../context/AppContext';

import { Backdrop, Button } from '..';

import styles from './Modal.module.css';


function Modal({ children, title }) {
  const { cart, isModalVisible, isCheckoutVisible, isCheckoutComplete, onToggleModal, onRemoveAll, onToggleCheckout, onResetCheckout } = useContext(AppContext);

  const handleDismissModal = (event) => {
    event.stopPropagation();

    if (isCheckoutVisible) {
      onToggleCheckout();
    }

    if (isCheckoutComplete) {
      onResetCheckout();
    }

    onToggleModal();
  };

  const handleClearCart = (event) => {
    event.stopPropagation();

    onRemoveAll();
  };

  const handleOrderMeal = (event) => {
    event.stopPropagation();
    
    onToggleCheckout();
  };

  const handleModal = (event) => {
    event.stopPropagation();
  };

  return (
    <Fragment>
      {
        isModalVisible ? (
          <Backdrop onDismiss={ handleDismissModal }>
            <div className={ styles.modal } onClick={ handleModal }>
              <header className={ styles['modal__header'] }>
                <h3 className={ styles['modal__title'] }>{ title }</h3>

                <Button className="button--icon" onHandleClick={ handleDismissModal }>
                  <FiX size="1.75em" />
                </Button>
              </header>
              
              <div className={ styles['modal__content'] }>{ children }</div>

              <footer className={ styles['modal__footer'] }>
                {
                  (cart.length && !isCheckoutVisible) ? (
                    <Fragment>
                      <Button className="button--bordered" onHandleClick={ handleClearCart }>Clear</Button>

                      <Button onHandleClick={ handleOrderMeal }>Order</Button>
                    </Fragment>
                  ) : null
                }
              </footer>
            </div>
          </Backdrop>
        ) : (
          null
        )
      }
    </Fragment>
  );
}

Modal.propTypes = {
  title: PropTypes.string.isRequired
};

export default Modal;
