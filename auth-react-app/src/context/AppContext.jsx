import React, { createContext, useState } from 'react';

const AppContext = createContext({
  token: '',
  isLoggedIn: false,
  onLogin: (token) => {},
  onLogout: () => {}
});

AppContext.displayName = 'AppContext';

export function AppContextProvider({ children }) {
  const [ token, setToken ] = useState(null);

  const isLoggedIn = !!token;

  const loginHandler = (token) => {
    setToken(token);
  };

  const logoutHandler = () => {
    setToken(null);
  };

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
