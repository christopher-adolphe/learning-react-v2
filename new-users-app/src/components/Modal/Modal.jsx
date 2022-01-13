import React, { Fragment, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Button from '../shared/Button/Button';
import styles from './Modal.module.css';

function Modal({ title, body, buttonLabel, isVisible = false, onDismiss }) {
  const [ isModalVisible, setIsModalVisible ] = useState(isVisible);

  const handleDismissModal = () => {
    setIsModalVisible(false);
    onDismiss();
  };

  useEffect(() => {
    setIsModalVisible(isVisible);
  }, [isVisible]);

  return (
    <Fragment>
      {
        isModalVisible ? (
          <div className={ styles.modal } onClick={ handleDismissModal } >
            <div className={ styles['modal__dialog'] }>
              <div className={ styles['modal__content'] }>
                <div className={ styles['modal__header'] }>
                  <h3>{ title }</h3>
                </div>

                <div className={ styles['modal__body'] }>
                  <p>{ body }</p>
                </div>

                <div className={ styles['modal__footer'] }>
                  <Button label={ buttonLabel } onHandleClick={ handleDismissModal } />
                </div>
              </div>
            </div>
          </div>
        ) : null
      }
    </Fragment>
  );
}

Modal.propTypes = {
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  buttonLabel: PropTypes.string.isRequired,
  isVisible: PropTypes.bool
};

export default Modal;
