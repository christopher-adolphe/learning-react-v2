import React, { useContext } from 'react';

import Ingredients from './components/Ingredients/Ingredients';
import Auth from './components/Auth';

import { AuthContext } from './context/AuthContext';

const App = props => {
  const { isAuth } = useContext(AuthContext);
  let component = <Auth />;

  if (isAuth) {
    component = <Ingredients />;
  }

  return component;
};

export default App;
