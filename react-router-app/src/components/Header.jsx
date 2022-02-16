import React from 'react';
import { NavLink } from 'react-router-dom';

import styles from './Header.module.css';

function Header(props) {
  return (
    <header className={ styles.header }>
      <nav>
        <ul>
          <li>
            {/*
              Using the `<NavLink>` component from react-router-dom to
              create a link to the path we want to navigate to. This
              component take `to` prop where we define the path to
              activate when the link is clicked. It also prevents the
              default browser behavior of reloading the page when the
              path is changed and can add a css class to the active link
              using the `activeClassName` prop
            */}
            <NavLink to="/welcome" activeClassName={ styles.active }>Welcome</NavLink>
          </li>

          <li>
            <NavLink to="/products" activeClassName={ styles.active }>Products</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
