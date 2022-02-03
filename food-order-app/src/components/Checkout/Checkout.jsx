import React from 'react';

import { Button } from '..';

import { useInput } from '../../hooks';

import styles from './Checkout.module.css';

const emptyFieldValidator = (value) => {
  return value.trim() !== '';
};

function Checkout() {
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

  if (nameInput.isValid && streetInput.isValid && postalCodeInput.isValid && cityInput.isValid) {
    isCheckoutFormValid = true;
  }

  const handleConfirm = (event) => {
    event.preventDefault();
    event.stopPropagation();

    console.log('handleConfirm called. Sending order...');

    handleNameReset();
    handleStreetReset();
    handlePostalCodeReset();
    handleCityReset();
  };

  return (
    <form className={ styles['checkout'] }>
      <div className={ `${styles['form-control']} ${styles['form-control--invalid']}` }>
        <label htmlFor="name">Name: </label>
        <input
          type="text"
          id="name"
          value={ nameInput.value }
          onChange={ handleNameChange }
          onBlur={ handleNameBlur }
        />

        {
          (nameInput.isTouched && !nameInput.isValid)
            ? <span className={ styles['error'] }>Name is a mandatory field</span>
            : null
        }
      </div>

      <div className={ styles['form-control'] }>
        <label htmlFor="street">Street: </label>
        <input
          type="text"
          id="street"
          value={ streetInput.value }
          onChange={ handleStreetChange }
          onBlur={ handleStreetBlur }
        />

        {
          (streetInput.isTouched && !streetInput.isValid)
            ? <span className={ styles['error'] }>Street is a mandatory field</span>
            : null
        }
      </div>

      <div className={ styles['form-control'] }>
        <label htmlFor="postalCode">Postal Code: </label>
        <input
          type="text"
          id="postalCode"
          value={ postalCodeInput.value }
          onChange={ handlePostalCodeChange }
          onBlur={ handlePostalCodeBlur }
        />

        {
          (postalCodeInput.isTouched && !postalCodeInput.isValid)
            ? <span className={ styles['error'] }>Postal Code is a mandatory field</span>
            : null
        }
      </div>

      <div className={ styles['form-control'] }>
        <label htmlFor="city">City: </label>
        <input
          type="text"
          id="city"
          value={ cityInput.value }
          onChange={ handleCityChange }
          onBlur={ handleCityBlur }
        />

        {
          (cityInput.isTouched && !cityInput.isValid)
            ? <span className={ styles['error'] }>City is a mandatory field</span>
            : null
        }
      </div>

      <div className={ `${styles['form-control']} ${styles['form-control--action']}` }>
        <Button className="button--bordered" onHandleClick={ handleConfirm }>Cancel</Button>
        <Button onHandleClick={ handleConfirm } isDisabled={ isCheckoutFormValid }>Confirm</Button>
      </div>
    </form>
  );
}

export default Checkout;
