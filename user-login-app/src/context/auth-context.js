import React, { createContext, useState, useEffect } from 'react';

// Using the `createContext()` method to create a
// store object that will be accessible throughout
// the whole application. The `createContext()` method
// take an object as argument for the default value of
// the context. This default value object will contain
// "key: value" pairs of state we want to share throughout
// the whole application.
// NOTE: The `createContext()` method returns a context object
// containing 3 properties:
// 1) The `Provider` property which is a react component
// `<Context.Provider>` used to `provide` the context so
// that the other components of the application are aware of it
// This component should have a `value` prop where we pass
// the state which is to be shared

// 2) The `Consumer` property which is a react component
// `<Context.Provider>` used to `consume` the context. This
// componet will be used by those components which need to tap
// into the global state property that has been set as value
// in the context object. Inside this component, we need to
// writing a JSX expression which is an annonymous function
// that will receive the context as its argument and will
// return the JSX code of the wrapped component; i.e the
// component which is consuming the context

// 3) The `displayName` property which is string used to
// assign a name to the context components so that we can
// easily identify them in the component tree if we are
// using multiple context objects in the application
const AuthContext = createContext({
  isLoggedIn: false,
  onLogin: (email, password) => {},
  onLogout: () => {}
});

// Using the `displayName` property of the context object
// to assign it a name so that we can easily distinguish
// between different context components if we are using
// multiple contexts in the application
AuthContext.displayName = 'AuthContext';


// Creating a `AuthContextProvider` component that will be
// responsible of all the authentication logic so that we
// can make the `App` component lean and clean
export const AuthContextProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const loginHandler = (email, password) => {
    localStorage.setItem('isLoggedIn', '1');
    setIsLoggedIn(true);
  };

  const logoutHandler = () => {
    localStorage.removeItem('isLoggedIn');
    setIsLoggedIn(false);
  };

  useEffect(() => {
    const isUserLoggedIn = localStorage.getItem('isLoggedIn');

    if (isUserLoggedIn === '1') {
      setIsLoggedIn(true);
    }
  }, []);

  return (<AuthContext.Provider value={ { isLoggedIn, onLogin: loginHandler, onLogout: logoutHandler } }>{ children }</AuthContext.Provider>);
};

export default AuthContext;
