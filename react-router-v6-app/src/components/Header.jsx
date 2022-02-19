import React from 'react';
import { NavLink } from 'react-router-dom';

import styles from './Header.module.css';

function Header(props) {
  const handleActiveLink = (data) => {
    return data.isActive ? styles.active : '';
  };

  return (
    <header className={ styles.header }>
      <nav>
        <ul>
          <li>
            {/*
              Using the `<NavLink>` component from `react-router-dom` to
              create a link to the path we want to navigate to. This
              component take `to` prop where we define the path to
              activate when the link is clicked. It also prevents the
              default browser behavior of reloading the page when the
              path is changed
              NOTE: As from the version 6 of `react-router-dom` the
              `activeClassName` prop has been removed. Instead we can pass
              a function to the `className` prop and `react-router-dom` will
              automatically provide it an object as argument which has an
              `isActive` property which we can use to set an active class on
              the active link
            */}
            <NavLink to="/welcome" className={ handleActiveLink }>Welcome</NavLink>
          </li>

          <li>
            <NavLink to="/products" className={ handleActiveLink }>Products</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
