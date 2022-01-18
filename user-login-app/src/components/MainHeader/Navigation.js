import React, { useContext } from 'react';

import AuthContext from '../../context/auth-context';
import classes from './Navigation.module.css';

const Navigation = () => {
  // 1ST APPROACH: Using the `<Context.Consumer>` component to
  // listen and tap into the context object
  // return (
  //   <AuthContext.Consumer>
  //     {(context) => {
  //       return (
  //         <nav className={classes.nav}>
  //           <ul>
  //             {context.isLoggedIn && (
  //               <li>
  //                 <a href="/">Users</a>
  //               </li>
  //             )}
  //             {context.isLoggedIn && (
  //               <li>
  //                 <a href="/">Admin</a>
  //               </li>
  //             )}
  //             {context.isLoggedIn && (
  //               <li>
  //                 <button onClick={context.onLogout}>Logout</button>
  //               </li>
  //             )}
  //           </ul>
  //         </nav>
  //       )
  //     }}
  //   </AuthContext.Consumer>
  // );


  // 2ND APPROACH: Using the `useContext()` hook to listen
  // and tap into the context object. The `useContext()` hook
  // takes the `AuthContext` as its argument and returns the
  // global state
  const authContext = useContext(AuthContext);

  return (
    <nav className={classes.nav}>
      <ul>
        {authContext.isLoggedIn && (
          <li>
            <a href="/">Users</a>
          </li>
        )}
        {authContext.isLoggedIn && (
          <li>
            <a href="/">Admin</a>
          </li>
        )}
        {authContext.isLoggedIn && (
          <li>
            <button onClick={authContext.onLogout}>Logout</button>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Navigation;
