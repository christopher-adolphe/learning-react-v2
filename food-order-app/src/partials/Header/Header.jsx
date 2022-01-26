import React, { useContext, useState, useEffect } from 'react';
import { FiSmile, FiShoppingBag } from 'react-icons/fi';

import AppContext from '../../context/AppContext';

import { Button, Tag } from '../../components';

import styles from './Header.module.css';

function Header() {
  const { cart, onToggleModal } = useContext(AppContext);
  const [ isButtonAnimated, setIsButtonAnimated ] = useState(false);
  const cartCount = cart.length ? cart.reduce((prevValue, item) => prevValue + item.amount, 0) : 0;
  const classes = isButtonAnimated ? 'shake-top' : '';

  useEffect(() => {
    if (!cart.length) {
      return;
    }

    setIsButtonAnimated(true);

    const timer = setTimeout(() => {
      setIsButtonAnimated(false);
    }, 300);

    return () => {
      clearTimeout(timer);
    };
  }, [cart]);

  return (
    <header className={ styles.header }>
      <div className={ styles['header__navbar'] }>
        <span className={ styles['header__brand'] }><FiSmile color="#ce0a24" size="1.75em" /> Happy Meals</span>

        <Button className={ classes } onHandleClick={ onToggleModal }><FiShoppingBag size="1.5em" />Your Cart<Tag count={ cartCount } /></Button>
      </div>

      <div className={ styles['header__hero'] }>
        <div className={ styles['header__hero-content'] }>
          <h1>Delicious Food, Delivered to You</h1>

          <p>Choose your favorite meal from our broad selection of available meals and enjoy a delicious lunch or diner at home!!</p>

          <p>All our meals are prepared with high-quality ingredients and just-in-time by our experienced chefs.</p>
        </div>

        <div className={ styles['header__hero-shader'] }></div>
      </div>
    </header>
  );
}

export default Header;
