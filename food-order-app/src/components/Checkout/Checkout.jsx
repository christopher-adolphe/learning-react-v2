import React from 'react';

import { Button } from '..';

import styles from './Checkout.module.css';

function Checkout(props) {
  const handleConfirm = (event) => {
    event.preventDefault();
    event.stopPropagation();

    console.log('handleConfirm called. Sending order...');
  };

  return (
    <form>
      <div className={ styles['form-control']}>
        <label htmlFor="name">Name: </label>
        <input type="text" id="name" />
      </div>

      <div className={ styles['form-control']}>
        <label htmlFor="street">Street: </label>
        <input type="text" id="street" />
      </div>

      <div className={ styles['form-control']}>
        <label htmlFor="postalCode">Postal Code: </label>
        <input type="text" id="postalCode" />
      </div>

      <div className={ styles['form-control']}>
        <label htmlFor="city">City: </label>
        <input type="text" id="city" />
      </div>

      <div className={ styles['form-control']}>
        <Button className="button--bordered" onHandleClick={ handleConfirm }>Cancel</Button>
        <Button onHandleClick={ handleConfirm }>Confirm</Button>
      </div>
    </form>
  );
}

export default Checkout;
