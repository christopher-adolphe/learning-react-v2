import React, { useContext } from 'react';

import AppContext from '../../context/AppContext';

import { CartItem } from '..';

import styles from './Cart.module.css';

function Cart() {
  // TO DO: remove this hard coded value for `cartTotal` and create a state to manage it
  const cartTotal = 12.99;

  const { cart } = useContext(AppContext);

  return (
    <div className={ styles.cart }>
      {
        cart.length ? (
          <ul className={ styles['cart__list'] }>
            {
              cart.map(item => (
                <li key={ item.cartId } className={ styles['cart__list-item'] }>
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

export default Cart;
