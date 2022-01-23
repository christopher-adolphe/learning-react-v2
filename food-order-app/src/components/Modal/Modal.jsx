import React, { Fragment, useContext, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { FiX } from 'react-icons/fi';

import AppContext from '../../context/AppContext';

import { Backdrop, Button } from '..';

import styles from './Modal.module.css';


function Modal({ children, title }) {
  const { isModalVisible: contextIsModalVisible, onToggleModal, onRemoveAll } = useContext(AppContext);

  const [ isModalVisible, setIsModalVisible ] = useState(contextIsModalVisible);

  useEffect(() => {
    setIsModalVisible(contextIsModalVisible);
  }, [contextIsModalVisible]);

  const handleDismissModal = (event) => {
    event.stopPropagation();

    onToggleModal();
  };

  const handleClearCart = (event) => {
    event.stopPropagation();

    onToggleModal();
    onRemoveAll();
  };

  const handleOrderMeal = (event) => {
    event.stopPropagation();
  };

  return (
    <Fragment>
      {
        isModalVisible ? (
          <Backdrop onDismiss={ handleDismissModal }>
            <div className={ styles.modal }>
              <header className={ styles['modal__header'] }>
                <h3 className={ styles['modal__title'] }>{ title }</h3>

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

Modal.propTypes = {
  title: PropTypes.string.isRequired
};

export default Modal;
