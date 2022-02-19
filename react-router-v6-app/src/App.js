import { Routes, Route, Navigate } from 'react-router-dom';

import { Welcome, Products, ProductDetails } from './pages';
import { Header } from './components';

function App() {
  return (
    <div>
      <Header />

      <main>
        {/*
          Using the `<Routes>` component from `react-router-dom` to
          load only the component which exactly matches the defined path.
          The `<Routes>` component will go throught the defined routes
          from top to bottom, it will stop and render the component which
          first matches the path
          NOTE: The `<Routes>` component is equivalent to the `<Switch>`
          component from `react-router-dom` version 5 and is mandatory
          when defining routes
        */}
        <Routes>
          {/*
            As the from version 6 of `react-router-dom` the `<Redirect>`
            component has been replaced by the `<Navigate>` component to
            implement redirections
            NOTE: In order to really achieve redirection; meaning the user
            cannot use the back browser button to visit a previous page,
            we should add the `replace` prop to the `<Navigate>` component
          */}
          <Route path="/" element={ <Navigate replace to="/welcome" /> } />

          {/*
            Using the `<Route>` component from `react-router-dom` to
            define a path that will redirect to the `<Welcome />`
            component
          */}
          {/*
            Using the `<Route>` component from `react-router-dom` to
            define a certain path and the react component that should
            be rendered when the browser's URL matched the path defined
            in the `path` prop.
            NOTE: As the from version 6 of `react-router-dom`
            the component to be rendered is not nested as a child of the
            `<Route>` component but as a value of the `element` prop
            NOTE: The `element` prop receives the actual JSX tag of the
            to be rendered component and not a reference
          */}
          {/* <Route path="/welcome/*" element={ <Welcome /> } /> */}

          {/*
            NOTE: As the from version 6 of `react-router-dom`, there is
            an alternative way to define nested routes. We simply define
            the child routes as child `<Route>` components inside the
            parent `<Route>` component. This approach is better in the
            sense that all route definition is done a one spot and hence
            not scattered around the components of the whole application
            When using this approach we need to define a placeholder where
            we want to render the components when the nested route is active.
            This is achieved by using the `<Outlet />` component 
          */}
          <Route path="/welcome/*" element={ <Welcome /> }>
            <Route path="new-user" element={ (<h2>Welcome New User</h2>) } />
            <Route path="logged-user" element={ (<h2>Welcome Logge User</h2>) } />
          </Route>

          {/*
            NOTE: As the from version 6 of `react-router-dom` the `<Route>`
            component no more requires the `exact` prop because the internal
            logic for evaluating path has changed such that now they are
            evaluated to match exactly. If for same reason we don't need
            exact match but instead evaluate path that begin with a certain
            string, then we add `/*` at the end of the path
          */}
          <Route path="/products" element={ <Products /> } />

          {/*
            Using the `<Route>` component from `react-router-dom` to
            define a path with a dynamic segment. The `:id` is a
            placeholder for data that we can pass to this route when it
            is active and the component that will be rendered will have
            access to this dynamic segment. The dynamic segment is also
            refered to as a route parameter
          */}
          <Route path="/products/:id" element={ <ProductDetails /> } />
        </Routes>
      </main>
    </div>
  );
}

export default App;
