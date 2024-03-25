import React from 'react';
import { Link } from 'react-router-dom';

import styles from './Header.module.css';

function Header(props) {
  return (
    <header className={ styles.header }>
      <div className={ styles.logo }>React Meetups</div>
      <ul>
        <li>
          <Link to="/">All Meetups</Link>
        </li>
        <li>
          <Link to="/new-meetup">Add New Meetup</Link>
        </li>
        <li>
          <Link to="/favorites">My Favorites</Link>
        </li>
      </ul>
    </header>
  );
}

export default Header;
