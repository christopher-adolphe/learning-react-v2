import React, { Fragment, useContext, useState } from 'react';

import config from '../../config.json';

import AppContext from '../../context/AppContext';

import { useHttp } from '../../hooks';

import { CartItem, Checkout } from '..';

import styles from './Cart.module.css';
import loader from '../../assets/images/puff.svg';

function Cart() {
  const { cart, isCheckoutVisible, isCheckoutComplete, onRemoveAll, onGetCartTotal, onToggleCheckout, onCheckoutComplete } = useContext(AppContext);
  const { isLoading, error, sendRequest: postOrder } = useHttp();
  const cartTotal = onGetCartTotal();
  const [ orderId, setOrderId ] = useState(null);

  const getOrderDate = () => {
    const orderDate = new Date();
    const day = `${orderDate.getDate()}`.padStart(2, 0);
    const month = `${orderDate.getMonth() + 1}`.padStart(2, 0);
    const year = `${orderDate.getFullYear()}`;

    return `${day}/${month}/${year}`;
  };

  const handleOrderResponse = (data) => {
    setOrderId(data.name);
    onRemoveAll();
    onToggleCheckout();
    onCheckoutComplete();
  };

  const handleProcessOrder = (checkoutDetails) => {
    console.log('handleProcessOrder called...', checkoutDetails);
    const order = {
      ...checkoutDetails,
      date: getOrderDate(),
      items: [ ...cart ],
      total: cartTotal
    };

    postOrder({
      url: `${config.apiEndpoint}/orders.json`,
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: order
    }, handleOrderResponse);

    if (error) {
      return;
    }
  };

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
                  { isLoading
                    ? <div className={ styles[`cart__loader`] }><img src={ loader } alt="loader" /></div>
                    : <Checkout onProcessOrder={ handleProcessOrder } />
                  }
                </div>
              ) : null
            }

          </Fragment>
        ) : (
          <Fragment>
            {
              isCheckoutComplete
                ? (<h4 className={ styles['cart__message'] }>Thank you!!<br/><br/>Your meal(s) will be delivered to you soon!<br/><br/>Order id: { orderId }</h4>)
                : (<h4 className={ styles['cart__message'] }>Your cart is empty!</h4>)
            }
          </Fragment>
        )
      }
    </div>
  );
}

export default Cart;
