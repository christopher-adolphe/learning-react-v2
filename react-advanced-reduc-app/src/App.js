import { useEffect, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import config from './config.json';

import { productsActions } from './store';

import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';

function App() {
  const { items, isCartVisible } = useSelector(({ cart }) => cart);

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
    fetch(`${config.apiEndpoint}/cart.json`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(items)
    });

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
  }, [items, handleGetProducts]);

  return (
    <Layout>
      {
        isCartVisible ? <Cart /> : null
      }
      <Products />
    </Layout>
  );
}

export default App;
