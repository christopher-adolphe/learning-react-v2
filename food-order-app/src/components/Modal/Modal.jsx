import React, { Fragment, useContext, useState, useEffect } from 'react';
import { FiX } from 'react-icons/fi';

import AppContext from '../../context/AppContext';

import { Backdrop, Button } from '..';

import styles from './Modal.module.css';


function Modal({ children }) {
  const { isModalVisible: contextIsModalVisible, onToggleModal, onRemoveAll } = useContext(AppContext);

  const [ isModalVisible, setIsModalVisible ] = useState(contextIsModalVisible);

  useEffect(() => {
    setIsModalVisible(contextIsModalVisible);
  }, [contextIsModalVisible]);

  const handleDismissModal = (event) => {
    event.stopPropagation();

    setIsModalVisible(false);
    onToggleModal();
  };

  const handleClearCart = (event) => {
    event.stopPropagation();

    onRemoveAll();
  };

  const handleOrderMeal = (event) => {
    event.stopPropagation();
    console.log('handleOrderMeal called...');
  };

  return (
    <Fragment>
      {
        isModalVisible ? (
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
        ) : (
          null
        )
      }
    </Fragment>
  );
}

export default Modal;
