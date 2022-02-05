import React, { Fragment, useContext } from 'react';

import AppContext from '../../context/AppContext';

import { CartItem, Checkout } from '..';

import styles from './Cart.module.css';

function Cart() {
  const { cart, isCheckoutVisible, isCheckoutComplete, onGetCartTotal } = useContext(AppContext);
  const cartTotal = onGetCartTotal();

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
              <span className={ styles['cart__total-value'] }>Rs { cartTotal }</span>
            </div>

            {
              isCheckoutVisible ? (
                <div className={ `${styles['cart__list-item']} ${styles['cart__checkout']}` }>
                  <Checkout />
                </div>
              ) : null
            }

          </Fragment>
        ) : (
          <Fragment>
            {
              isCheckoutComplete
                ? (<h4 className={ styles['cart__message'] }>Thank you for your order!!<br/><br/>Your meal(s) will be delivered to you soon!</h4>)
                : (<h4 className={ styles['cart__message'] }>Your cart is empty!</h4>)
            }
          </Fragment>
        )
      }
    </div>
  );
}

export default Cart;
