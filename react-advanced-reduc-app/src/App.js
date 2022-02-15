import { Fragment, useEffect, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import config from './config.json';

import { productsActions } from './store';
import { sendCartData, fetchCartData } from './store';

import Notification from './components/UI/Notification';
import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';

let isFirstInit = true;

function App() {
  const { isCartVisible, notification } = useSelector(({ ui }) => ui);

  const { items, hasChanged } = useSelector(({ cart }) => cart);

  const dispatch = useDispatch();

  const handleGetProducts = useCallback((data) => {
    const productsData = data !== null ? Object.keys(data).map(key => ({
      id: key,
      title: data[key].title,
      price: data[key].price,
      description: data[key].description
    })) : [];

    dispatch(productsActions.loadProducts({ items: productsData }));
  }, [dispatch]);

  useEffect(() => {
    const getProducts = async (handleGetProducts) => {
      try {
        const response = await fetch(`${config.apiEndpoint}/products.json`);

        if (!response.ok) {
          throw new Error('Sorry, an error occurred while fetching products');
        }

        const data = await response.json();

        handleGetProducts(data);
      } catch (error) {
        console.log(error);
      }
    };

    getProducts(handleGetProducts);

    dispatch(fetchCartData());
  }, [dispatch, handleGetProducts]);

  useEffect(() => {
    if (isFirstInit) {
      isFirstInit = false;

      return;
    }

    // NOTE: Logic moved to an action creator function inside the
    // cart.js file
    // const updateCart = async () => {
    //   try {
    //     dispatch(uiActions.toggleNotificationBar({
    //       status: 'pending',
    //       title: 'Sending...',
    //       message: 'Sending cart data!'
    //     }));

    //     const response = await fetch(`${config.apiEndpoint}/cart.json`, {
    //       method: 'PUT',
    //       headers: { 'Content-Type': 'application/json' },
    //       body: JSON.stringify(items)
    //     });

    //     if (!response.ok) {
    //       throw new Error('Sorry, an error occurred while saving cart data');
    //     }
        
    //     dispatch(uiActions.toggleNotificationBar({
    //       status: 'success',
    //       title: 'Success!',
    //       message: 'Cart data sent successfully!'
    //     }));
    //   } catch (error) {
    //     dispatch(uiActions.toggleNotificationBar({
    //       status: 'error',
    //       title: 'Error!',
    //       message: 'Sending cart data failed!'
    //     }));
    //   }
    // };

    // updateCart();

    if (hasChanged) {
      // Dispatching an action creator function to
      // handle state related logics with side effect
      dispatch(sendCartData(items));
    }
  }, [items, hasChanged, dispatch]);

  return (
    <Fragment>
      {
        notification !== null ? <Notification status={ notification.status } title={ notification.title } message={ notification.message } /> : null
      }

      <Layout>
        {
          isCartVisible ? <Cart /> : null
        }
        <Products />
      </Layout>
    </Fragment>
  );
}

export default App;
