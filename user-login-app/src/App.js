import React, { Fragment, useContext } from 'react';

import AuthContext from './context/auth-context';
import Login from './components/Login/Login';
import Home from './components/Home/Home';
import MainHeader from './components/MainHeader/MainHeader';

function App() {
  const authContext = useContext(AuthContext);

  return (
    <Fragment>
      <MainHeader />
      <main>
        {!authContext.isLoggedIn && <Login />}
        {authContext.isLoggedIn && <Home />}
      </main>
    </Fragment>
  );
}

export default App;
