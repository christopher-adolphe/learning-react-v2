import React from 'react';
import { FiSmile, FiShoppingBag } from 'react-icons/fi';

import { Button } from '../../components';

import styles from './Header.module.css';

function Header(props) {
  return (
    <header className={ styles.header }>
      <div className={ styles['header__navbar'] }>
        <span className={ styles['header__brand'] }><FiSmile color="#202124" /> Happy Meals</span>

        <Button><FiShoppingBag />Your Cart</Button>
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
