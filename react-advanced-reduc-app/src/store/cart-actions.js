import config from '../config.json';

import { uiActions } from '.';
import { cartActions } from '.';

// Creating an action creator function which returns
// a function instead of the usual action object
// This returned function is called a `thunk`, it a
// function that dunbles all the work to be done
// When @redux/toolkit sees that we return a function
// instead of an action object, it will execute that
// function and automatically provide it the `dispatch`
// function as argument so that we can use that inside
// the thunk to dispatch other actions as side effects
// or as a flow of steps
export const sendCartData = (items) => {
  return async (dispatch) => {
    try {
      dispatch(uiActions.toggleNotificationBar({
        status: 'pending',
        title: 'Sending...',
        message: 'Sending cart data!'
      }));

      const response = await fetch(`${config.apiEndpoint}/cart.json`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(items)
      });

      if (!response.ok) {
        throw new Error('Sorry, an error occurred while saving cart data');
      }
      
      dispatch(uiActions.toggleNotificationBar({
        status: 'success',
        title: 'Success!',
        message: 'Cart data sent successfully!'
      }));
    } catch (error) {
      dispatch(uiActions.toggleNotificationBar({
        status: 'error',
        title: 'Error!',
        message: 'Sending cart data failed!'
      }));
    }
  };
}

export const fetchCartData = () => {
  return async (dispatch) => {
    try {
      const response = await fetch(`${config.apiEndpoint}/cart.json`);

      if (!response.ok) {
        throw new Error('Sorry, an error occurred while fetching cart data');
      }

      const data = await response.json();

      dispatch(cartActions.loadCart(data));
    } catch (error) {
      dispatch(uiActions.toggleNotificationBar({
        status: 'error',
        title: 'Error!',
        message: 'Fetching cart data failed!'
      }));
    }
  };
}
