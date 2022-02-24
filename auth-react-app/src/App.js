import React, { useContext, Fragment } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import AppContext from './context/AppContext';

import Layout from './components/Layout/Layout';
import UserProfile from './components/Profile/UserProfile';
import AuthPage from './pages/AuthPage';
import HomePage from './pages/HomePage';

function App() {
  const { isLoggedIn } = useContext(AppContext);
  return (
    <Layout>
      <Switch>
        {
          isLoggedIn ? (
            <Fragment>
              <Route path="/" exact>
                <HomePage />
              </Route>

              <Route path="/profile">
                <UserProfile />
              </Route>
            </Fragment>
          ) : (
            <Route path="/auth">
              <AuthPage />
            </Route>
          )
        }

        <Route path="*">
          <Redirect to="/auth" />
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;
