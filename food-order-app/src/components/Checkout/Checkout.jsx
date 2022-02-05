import React, { useContext } from 'react';

import config from '../../config.json';

import AppContext from '../../context/AppContext';

import { useInput, useHttp } from '../../hooks';

import { Button } from '..';

import styles from './Checkout.module.css';

const onlyNumberRegExp = /^[0-9]*$/;

const notEmptyFieldValidator = (value) => {
  if (value.trim() === '') {
    return 'Should not be empty!';
  }

  return null;
};

const stringFieldValidator = (value) => {
  const trimmed = value.trim();

  if (onlyNumberRegExp.test(trimmed)) {
    return 'Should contain letters only!';
  }

  return null;
};

const numberFieldValidator = (value) => {
  const trimmed = value.trim();

  if (!onlyNumberRegExp.test(trimmed)) {
    return 'Should contain numbers only!';
  }

  return null;
};

function Checkout() {
  const { cart, onRemoveAll, onGetCartTotal, onToggleCheckout, onCheckoutComplete } = useContext(AppContext);
  const { isLoading, error, sendRequest: postOrder } = useHttp();

  const {
    input: nameInput,
    handleChange: handleNameChange,
    handleBlur: handleNameBlur,
    handleValidation: handleNameValidation,
    handleReset: handleNameReset
  } = useInput();

  const {
    input: streetInput,
    handleChange: handleStreetChange,
    handleBlur: handleStreetBlur,
    handleValidation: handleStreetValidation,
    handleReset: handleStreetReset
  } = useInput();

  const {
    input: postalCodeInput,
    handleChange: handlePostalCodeChange,
    handleBlur: handlePostalCodeBlur,
    handleValidation: handlePostalCodeValidation,
    handleReset: handlePostalCodeReset
  } = useInput();

  const {
    input: cityInput,
    handleChange: handleCityChange,
    handleBlur: handleCityBlur,
    handleValidation: handleCityValidation,
    handleReset: handleCityReset
  } = useInput();

  let isCheckoutFormValid = false;
  const nameHasNoError = nameInput.isTouched && nameInput.isValid;
  const streetHasNoError = streetInput.isTouched && streetInput.isValid;
  const postalCodeHasNoError = postalCodeInput.isTouched && postalCodeInput.isValid;
  const cityHasNoError = cityInput.isTouched && cityInput.isValid;

  if (nameHasNoError
    && streetHasNoError
    && postalCodeHasNoError
    && cityHasNoError) {
    isCheckoutFormValid = true;
  }

  const handleValidateOnBlur = (event) => {
    const { id: formControl } = event.target;

    switch (formControl) {
      case 'name':
        handleNameBlur();
        handleNameValidation(notEmptyFieldValidator, stringFieldValidator);

        break;

      case 'street':
        handleStreetBlur();
        handleStreetValidation(notEmptyFieldValidator);

        break;

      case 'postalCode':
        handlePostalCodeBlur();
        handlePostalCodeValidation(notEmptyFieldValidator, numberFieldValidator);

        break;

      case 'city':
        handleCityBlur();
        handleCityValidation(notEmptyFieldValidator, stringFieldValidator);

        break;
    
      default:
        break;
    }
  };

  const resetCheckoutForm = () => {
    handleNameReset();
    handleStreetReset();
    handlePostalCodeReset();
    handleCityReset();
  };

  const getOrderDate = () => {
    const orderDate = new Date();
    const day = `${orderDate.getDate()}`.padStart(2, 0);
    const month = `${orderDate.getMonth() + 1}`.padStart(2, 0);
    const year = `${orderDate.getFullYear()}`;

    return `${day}/${month}/${year}`;
  };

  const handleOrderResponse = (data) => {
    return data.name;
  };

  const handleCancel = (event) => {
    event.stopPropagation();

    onToggleCheckout();
    resetCheckoutForm();
  }

  const handleConfirm = (event) => {
    event.preventDefault();
    event.stopPropagation();

    if (!isCheckoutFormValid) {
      return;
    }

    const order = {
      client: nameInput.value,
      address: `${streetInput.value}, ${cityInput.value}, ${postalCodeInput.value}`,
      items: [ ...cart ],
      total: onGetCartTotal(),
      date: getOrderDate()
    }

    console.log('handleConfirm called. Sending order..., ', order);

    postOrder({
      url: `${config.apiEndpoint}/orders.json`,
      headers: { 'Content-Type': 'application/json' },
      body: order
    }, handleOrderResponse);

    if (error) {
      return;
    }

    onRemoveAll();
    onToggleCheckout();
    onCheckoutComplete();
    resetCheckoutForm();
  };

  return (
    <form className={ styles['checkout'] }>
      <div className={ nameInput.isValid
        ? `${styles['form-control']}`
        : `${styles['form-control']} ${styles['form-control--invalid']}` }>
        <label htmlFor="name">Name: </label>
        <input
          type="text"
          id="name"
          value={ nameInput.value }
          onChange={ handleNameChange }
          onBlur={ handleValidateOnBlur }
        />

        {
          (nameInput.isTouched && !nameInput.isValid)
            ? <span className={ styles['error'] }>{ nameInput.error }</span>
            : null
        }
      </div>

      <div className={ streetInput.isValid
        ? `${styles['form-control']}`
        : `${styles['form-control']} ${styles['form-control--invalid']}` }>
        <label htmlFor="street">Street: </label>
        <input
          type="text"
          id="street"
          value={ streetInput.value }
          onChange={ handleStreetChange }
          onBlur={ handleValidateOnBlur }
        />

        {
          (streetInput.isTouched && !streetInput.isValid)
            ? <span className={ styles['error'] }>{ streetInput.error }</span>
            : null
        }
      </div>

      <div className={ postalCodeInput.isValid
        ? `${styles['form-control']}`
        : `${styles['form-control']} ${styles['form-control--invalid']}` }>
        <label htmlFor="postalCode">Postal Code: </label>
        <input
          type="text"
          id="postalCode"
          value={ postalCodeInput.value }
          onChange={ handlePostalCodeChange }
          onBlur={ handleValidateOnBlur }
        />

        {
          (postalCodeInput.isTouched && !postalCodeInput.isValid)
            ? <span className={ styles['error'] }>{ postalCodeInput.error }</span>
            : null
        }
      </div>

      <div className={ cityInput.isValid
        ? `${styles['form-control']}`
        : `${styles['form-control']} ${styles['form-control--invalid']}` }>
        <label htmlFor="city">City: </label>
        <input
          type="text"
          id="city"
          value={ cityInput.value }
          onChange={ handleCityChange }
          onBlur={ handleValidateOnBlur }
        />

        {
          (cityInput.isTouched && !cityInput.isValid)
            ? <span className={ styles['error'] }>{ cityInput.error }</span>
            : null
        }
      </div>

      <div className={ `${styles['form-control']} ${styles['form-control--action']}` }>
        <Button className="button--bordered" onHandleClick={ handleCancel }>Cancel</Button>
        <Button onHandleClick={ handleConfirm } isDisabled={ !isCheckoutFormValid }>Confirm</Button>
      </div>
    </form>
  );
}

export default Checkout;
