import React from 'react';
import { Route } from 'react-router-dom';

function Welcome(props) {
  return (
    <section>
      <h1>Welcome Component</h1>

      {/*
        Using the `<Route>` component from `react-router-dom` to
        define nested routes.
        NOTE: The nested routes are only evaluated when the parent
        route is active
      */}

      <Route path="/welcome/new-user">
        <h2>Welcome New User</h2>
      </Route>

      <Route path="/welcome/logged-user">
        <h2>Welcome Logge User</h2>
      </Route>
    </section>
  );
}

export default Welcome;
