import React, { useContext, useState, useEffect } from 'react';

import AppContext from '../../context/AppContext';

import { CartItem } from '..';

import styles from './Cart.module.css';

function Cart() {
  const { cart } = useContext(AppContext);
  const [ cartSummary, setCartSummary ] = useState();
  const cartTotal = cart.length ? cart.reduce((prevValue, curValue) => prevValue + curValue.price, 0) : 0;

  useEffect(() => {
    const buildCartSummary = (items) => {
      let transformedItems = {};
  
      items.forEach(item => {
        if (Object.keys(transformedItems).findIndex(key => key === item.id) === -1) {
          transformedItems[item.id] = [ item ];
        } else {
          transformedItems[item.id] = [ ...transformedItems[item.id], item ];
        }
      });
  
      return transformedItems;
    };

    setCartSummary(buildCartSummary(cart));
  }, [cart]);

  return (
    <div className={ styles.cart }>
      {
        cart.length ? (
          <ul className={ styles['cart__list'] }>
            {
              cartSummary ? Object.keys(cartSummary).map(key => (
                <li key={ key } className={ styles['cart__list-item'] }>
                  <CartItem meal={ cartSummary[key][0] } amount={ cartSummary[key].length } />
                </li>
              )) : null
            }
            <li className={ `${styles['cart__list-item']} ${styles['cart__total']}` }>
              <span className={ styles['cart__total-label'] }>Total Amount</span>
              <span className={ styles['cart__total-value'] }>Rs { cartTotal.toFixed(2) }</span>
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
