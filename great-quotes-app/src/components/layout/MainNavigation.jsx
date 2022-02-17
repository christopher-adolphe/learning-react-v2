import React from 'react';
import { Link, NavLink } from 'react-router-dom';

import styles from './MainNavigation.module.css';

function MainNavigation(props) {
  return (
    <header className={ styles.header }>
      <Link to="/" className={ styles.logo }>Great Quotes</Link>

      <nav className={ styles.nav }>
        <ul>
          <li>
            <NavLink to="/all-quotes" activeClassName={ styles.active }>All Quotes</NavLink>
          </li>
          <li>
            <NavLink to="/add-quote" activeClassName={ styles.active }>Add a Quote</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
