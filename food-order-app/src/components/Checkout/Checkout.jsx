import React, { useContext } from 'react';

import AppContext from '../../context/AppContext';

import { useInput } from '../../hooks';

import { Button } from '..';

import styles from './Checkout.module.css';

const onlyNumberRegExp = /^\d+$/;

const stringFieldValidator = (value) => {
  const trimmed = value.trim();

  return trimmed !== '' && !trimmed.match(onlyNumberRegExp);
};

const numberFieldValidator = (value) => {
  const trimmed = value.trim();

  return trimmed !== '' && trimmed.match(onlyNumberRegExp);
};

function Checkout() {
  const { onToggleCheckout } = useContext(AppContext);

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
        handleNameValidation(stringFieldValidator);

        break;

      case 'street':
        handleStreetBlur();
        handleStreetValidation(stringFieldValidator);

        break;

      case 'postalCode':
        handlePostalCodeBlur();
        handlePostalCodeValidation(numberFieldValidator);

        break;

      case 'city':
        handleCityBlur();
        handleCityValidation(stringFieldValidator);

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

    console.log('handleConfirm called. Sending order...');

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
            ? <span className={ styles['error'] }>Name is a mandatory field</span>
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
            ? <span className={ styles['error'] }>Street is a mandatory field</span>
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
            ? <span className={ styles['error'] }>Postal Code is a mandatory field</span>
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
            ? <span className={ styles['error'] }>City is a mandatory field</span>
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
