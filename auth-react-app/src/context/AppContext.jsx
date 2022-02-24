import React, { createContext, useState, useEffect, useCallback } from 'react';

const AppContext = createContext({
  token: '',
  isLoggedIn: false,
  onLogin: (token) => {},
  onLogout: () => {}
});

AppContext.displayName = 'AppContext';

let logoutTimer;

const expirationTimeHandler = (expirationTime) => {
  const currentTime = new Date().getTime();
  const expiration = new Date(expirationTime).getTime();

  return expiration - currentTime;
};

const retrieveStoredToken = () => {
  const storedToken = localStorage.getItem('token');
  const storedExpiration = localStorage.getItem('expiresIn');
  const remainingTime = expirationTimeHandler(storedExpiration);

  if (remainingTime <= 60000) {
    localStorage.removeItem('token');
    localStorage.removeItem('expiresIn');

    return null;
  }

  return { storedToken, storedExpiration };
};

export function AppContextProvider({ children }) {
  let initialToken;
  const tokenData = retrieveStoredToken();

  if (tokenData) {
    initialToken = tokenData.storedToken;
  }

  const [ token, setToken ] = useState(initialToken);

  const isLoggedIn = !!token;

  const logoutHandler = useCallback(() => {
    setToken(null);

    localStorage.removeItem('token');
    localStorage.removeItem('expiresIn');

    if (logoutTimer) {
      clearTimeout(logoutTimer);
    }
  }, []);

  const loginHandler = (token, expirationTime) => {
    setToken(token);

    localStorage.setItem('token', token);
    localStorage.setItem('expiresIn', expirationTime);

    const logoutDuration = expirationTimeHandler(expirationTime);

    logoutTimer = setTimeout(logoutHandler, logoutDuration);
  };

  useEffect(() => {
    if (tokenData) {
      console.log('tokenData: ', tokenData);
      logoutTimer = setTimeout(logoutHandler, tokenData.storedExpiration);
    }
  }, [tokenData, logoutHandler]);

  const appContextValue = {
    token,
    isLoggedIn,
    onLogin: loginHandler,
    onLogout: logoutHandler
  };

  return (
    <AppContext.Provider value={ appContextValue }>
      { children }
    </AppContext.Provider>
  );
}

export default AppContext;
