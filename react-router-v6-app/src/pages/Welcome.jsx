import React from 'react';
import { Routes, Route, Outlet } from 'react-router-dom';

function Welcome(props) {
  return (
    <section>
      <h1>Welcome Component</h1>

      {/*
        Using the `<Route>` component from `react-router-dom` to
        define nested routes.
        NOTE: The nested routes are only evaluated when the parent
        route is active and as from version 6 of `react-router-dom`,
        nested routes are relative to the parent route such that we
        no more need to specify the complete path when defining the
        nested routes. We only need to add the `/*` at the end of the
        `path` prop of the parent route
        Same applies to `<Link>` to nested routes
      */}

      {/* Moving the nested route definitions to App.js */}
      {/* <Routes>
        <Route path="new-user" element={ (<h2>Welcome New User</h2>) } />

        <Route path="logged-user" element={ (<h2>Welcome Logge User</h2>) } />
      </Routes> */}

      {/*
        Using the `<Outlet />` component from `react-router-dom` to
        indicate where to render the component of the nested routes
      */}
      <Outlet />

    </section>
  );
}

export default Welcome;
