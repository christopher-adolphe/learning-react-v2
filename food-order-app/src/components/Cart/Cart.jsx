import React, { Fragment, useContext } from 'react';

import AppContext from '../../context/AppContext';

import { CartItem } from '..';

import styles from './Cart.module.css';

function Cart() {
  const { cart } = useContext(AppContext);
  const cartTotal = cart.length ? cart.reduce((prevValue, item) => prevValue + (item.price * item.amount), 0) : 0;

  return (
    <div className={ styles.cart }>
      {
        cart.length ? (
          <Fragment>
            <ul className={ styles['cart__list'] }>
              {
                cart.map(item => (
                  <li key={ item.id } className={ styles['cart__list-item'] }>
                    <CartItem meal={ item } />
                  </li>
                ))
              }
            </ul>

            <div className={ `${styles['cart__list-item']} ${styles['cart__total']}` }>
              <span className={ styles['cart__total-label'] }>Total Amount</span>
              <span className={ styles['cart__total-value'] }>Rs { cartTotal.toFixed(2) }</span>
            </div>
          </Fragment>
        ) : (
          <h4 className={ styles['cart__message'] }>Your cart is empty!</h4>
        )
      }
    </div>
  );
}

export default Cart;
