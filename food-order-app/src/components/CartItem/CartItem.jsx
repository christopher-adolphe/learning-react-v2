import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { FiMinus, FiPlus } from 'react-icons/fi';

import AppContext from '../../context/AppContext';

import { Button } from '..';

import styles from './CartItem.module.css';

function CartItem({ meal, amount }) {
  const { onAddItem, onRemoveItem } = useContext(AppContext);

  const handleIncrementItem = (event) => {
    event.stopPropagation();

    onAddItem([ meal ]);
  };

  const handleDecrementItem = (event) => {
    event.stopPropagation();

    onRemoveItem(meal.id);
  };

  return (
    <div className={ styles['cart-item'] }>
      <div className={ styles['cart-item__description'] }>
        <h4 className={ styles['cart-item__title'] }>{ meal.title }</h4>

        <div className={ styles['cart-item__total'] }>
          <span className={ styles['cart-item__price'] }>Rs { meal.price }</span>
          <span className={ styles['cart-item__amount'] }>x { amount }</span>
        </div>
      </div>

      <div className={ styles['cart-item__controls'] }>
        <Button className="button--icon" onHandleClick={ handleDecrementItem }>
          <FiMinus size="1.75em" />
        </Button>

        <Button className="button--icon" onHandleClick={ handleIncrementItem }>
          <FiPlus size="1.75em" />
        </Button>
      </div>
    </div>
  );
}

CartItem.propTypes = {
  meal: PropTypes.object.isRequired,
  amount: PropTypes.number.isRequired
};

export default CartItem;
