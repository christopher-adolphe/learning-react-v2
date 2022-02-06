import React, { useContext } from 'react';
import PropTypes from 'prop-types';

import AppContext from '../../context/AppContext';

import { useInput } from '../../hooks';

import { Button } from '..';

import styles from './Checkout.module.css';

const onlyAlphabeticRegExp = /^[A-Za-z -]+$/;
const onlyNumberRegExp = /^[0-9]*$/;

const notEmptyFieldValidator = (value) => {
  if (value.trim() === '') {
    return 'Should not be empty!';
  }

  return null;
};

const stringFieldValidator = (value) => {
  const trimmed = value.trim();

  if (!onlyAlphabeticRegExp.test(trimmed)) {
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

const maxLengthValidator = (value) => {
  const trimmed = value.trim();

  if (trimmed.length !== 5) {
    return 'Should contain 5 digits';
  }

  return null;
}

function Checkout({ onProcessOrder }) {
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
        handleNameValidation(notEmptyFieldValidator, stringFieldValidator);

        break;

      case 'street':
        handleStreetBlur();
        handleStreetValidation(notEmptyFieldValidator);

        break;

      case 'postalCode':
        handlePostalCodeBlur();
        handlePostalCodeValidation(notEmptyFieldValidator, numberFieldValidator, maxLengthValidator);

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

    const checkoutDetails = {
      client: nameInput.value,
      address: `${streetInput.value}, ${cityInput.value}, ${postalCodeInput.value}`
    }

    onProcessOrder(checkoutDetails);
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

Checkout.propTypes = {
  onProcessOrder: PropTypes.func.isRequired
};

export default Checkout;
