import React from 'react';
import PropTypes from 'prop-types';

import { CartItem } from '..';

import styles from './Cart.module.css';

function Cart({ items }) {
  const cartTotal = 12.99;

  return (
    <div className={ styles.cart }>
      {
        items.length ? (
          <ul className={ styles['cart__list'] }>
            {
              items.map(item => (
                <li key={ item._id } className={ styles['cart__list-item'] }>
                  <CartItem meal={ item } />
                </li>
              ))
            }
            <li className={ `${styles['cart__list-item']} ${styles['cart__total']}` }>
              <span className={ styles['cart__total-label'] }>Total Amount</span>
              <span className={ styles['cart__total-value'] }>Rs { cartTotal }</span>
            </li>
          </ul>
        ) : (
          <h4 className={ styles['cart__message'] }>Your cart is empty!</h4>
        )
      }
    </div>
  );
}

Cart.propTypes = {
  items: PropTypes.array.isRequired
};

export default Cart;
