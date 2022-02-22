import React, { useContext, Fragment } from 'react';
import { Link } from 'react-router-dom';

import AppContext from '../../context/AppContext';

import classes from './MainNavigation.module.css';

const MainNavigation = () => {
  const { isLoggedIn, onLogout } = useContext(AppContext);

  const logoutHandler = () => {
    onLogout();
  };

  return (
    <header className={classes.header}>
      <Link to='/'>
        <div className={classes.logo}>React Auth</div>
      </Link>
      <nav>
        <ul>
          {
            isLoggedIn ? (
              <Fragment>
                <li>
                  <Link to='/profile'>Profile</Link>
                </li>
                <li>
                  <button onClick={ logoutHandler }>Logout</button>
                </li>
              </Fragment>
            ) : (
              <li>
                <Link to='/auth'>Login</Link>
              </li>
            )
          }
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;
