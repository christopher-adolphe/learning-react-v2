import React, { createContext, useState } from 'react';

export const AuthContext = createContext({
  isAuth: false,
  onLogin: () => {},
  onLogout: () => {}
});

AuthContext.displayName = 'AuthContext';

const AuthContextProvider = ({ children }) => {
  const [ isAuth, setIsAuth ] = useState(false);

  const loginHandler = () => {
    setIsAuth(true);
  };

  const logoutHandler = () => {
    setIsAuth(false);
  };

  const authContextValue = { isAuth, onLogin: loginHandler, onLogout: logoutHandler };

  return (
    <AuthContext.Provider value={ authContextValue }>
      { children }
    </AuthContext.Provider>
  )
};

export default AuthContextProvider;
