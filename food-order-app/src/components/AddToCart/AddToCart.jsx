import React, { useContext, useState } from 'react';
import PropTypes from 'prop-types'
import { FiPlusCircle } from 'react-icons/fi';

import AppContext from '../../context/AppContext';

import { Button } from '..';

import styles from './AddToCart.module.css';

function AddToCart({ meal }) {
  const { onAddItem } = useContext(AppContext);
  const [ cartData, setCartData ] = useState({ amount: 1, error: null });

  const handleAmountChange = (event) => {
    if (+event.target.value < 1) {
      setCartData({ amount: +event.target.value, error: 'Amount cannot be less than 1' });
      
      return;
    }

    if (+event.target.value > 5) {
      setCartData({ amount: +event.target.value, error: 'Amount cannot be greater than 5' });
      
      return;
    }

    setCartData({ amount: +event.target.value, error: null });
  };

  const handleAddToCart = (item) => {
    const { id, title, price } = item;
    const mealItems = [];

    for (let count = 0; count < cartData.amount; count++) {
      mealItems.push({ id, title, price });
    }

    onAddItem(mealItems);
    setCartData({ amount: 1, error: null });
  };

  return (
    <div className={ styles['add-to-cart'] }>
      <div className={ styles['add-to-cart__control'] }>
        <label className={ styles['add-to-cart__label'] } htmlFor="amount">Amount:</label>

        <input className={ styles['add-to-cart__input'] } id="amount" type="number" min="1" max="5" value={ cartData.amount } onChange={ handleAmountChange } />
      </div>

      <span className={ cartData.error !== null ? `${styles['add-to-cart__error']} ${styles['add-to-cart__error--visible']}` : styles['add-to-cart__error'] }>{ cartData.error }</span>

      <div className={ styles['add-to-cart__action'] }>
        <Button onHandleClick={ () => handleAddToCart(meal) } isDisabled={ cartData.error !== null }><FiPlusCircle size="1.5em" /> Add</Button>
      </div>
    </div>
  );
}

AddToCart.propTypes = {
  meal: PropTypes.object.isRequired
};

export default AddToCart;
