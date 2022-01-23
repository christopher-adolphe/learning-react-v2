import React, { useContext, useState } from 'react';
import PropTypes from 'prop-types'
import { FiPlusCircle } from 'react-icons/fi';

import AppContext from '../../context/AppContext';

import { Button } from '..';

import styles from './AddToCart.module.css';

function AddToCart({ meal }) {
  const { onAddItem } = useContext(AppContext);
  const [ amount, setAmount ] = useState(1);

  const handleAmountChange = (event) => {
    setAmount(+event.target.value);
  };

  const handleAddToCart = (item) => {
    const { id, title, price } = item;
    const mealItems = [];

    for (let count = 0; count < amount; count++) {
      mealItems.push({ id, title, price });
    }

    onAddItem(mealItems);
  };

  return (
    <div className={ styles['add-to-cart'] }>
      <div className={ styles['add-to-cart__control'] }>
        <label className={ styles['add-to-cart__label'] } htmlFor="amount">Amount:</label>
        <input className={ styles['add-to-cart__input'] } id="amount" type="number" min="1" max="10" value={ amount } onChange={ handleAmountChange } />
      </div>

      <div className={ styles['add-to-cart__action'] }>
        <Button onHandleClick={ () => handleAddToCart(meal) }><FiPlusCircle size="1.5em" /> Add</Button>
      </div>
    </div>
  );
}

AddToCart.propTypes = {
  meal: PropTypes.object.isRequired
};

export default AddToCart;
