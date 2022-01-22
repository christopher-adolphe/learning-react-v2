import React, { useContext } from 'react';
import PropTypes from 'prop-types'
import { FiPlusCircle } from 'react-icons/fi';

import AppContext from '../../context/AppContext';

import { Button } from '..';

import styles from './AddToCart.module.css';

function AddToCart({ meal }) {
  const { onAddItem } = useContext(AppContext);

  // const handleAddToCart = (item) => {
  //   console.log('handleAddToCart called...', item);
  // };

  return (
    <div className={ styles['add-to-cart'] }>
      <div className={ styles['add-to-cart__control'] }>
        <label className={ styles['add-to-cart__label'] } htmlFor="amount">Amount:</label>
        <input className={ styles['add-to-cart__input'] } id="amount" type="number" min="1" max="10" />
      </div>

      <div className={ styles['add-to-cart__action'] }>
        <Button onHandleClick={ () => onAddItem(meal) }><FiPlusCircle size="1.5em" /> Add</Button>
      </div>
    </div>
  );
}

AddToCart.propTypes = {
  meal: PropTypes.object.isRequired
};

export default AddToCart;
