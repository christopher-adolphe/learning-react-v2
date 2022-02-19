import { Route, Switch, Redirect } from 'react-router-dom';

import { Welcome, Products, ProductDetails } from './pages';
import { Header } from './components';

function App() {
  return (
    <div>
      <Header />

      <main>
        {/*
          Using the `<Switch>` component from `react-router-dom` to
          load only the component which first matches the defined path.
          The `<Switch>` component will go throught the defined routes
          from top to bottom, it will stop and render the component which
          first matches the path
          NOTE: Since the `<Switch>` component will load the component
          with the first matching path, the order in which the we define
          our routes becomes important. We should therefore order them from
          the most specific to the least or we should add the `exact` prop
          on the `<Route>` component to indicate to the `<Switch>` component
          that the path should exactly match the defined path of the route
        */}
        <Switch>
          {/*
            Using the `<Route>` component from `react-router-dom` to
            define a path that will redirect to the `<Welcome />`
            component
          */}
          <Route path="/" exact>
            {/*
              Using the `<Redirect>` component from `react-router-dom` to
              specify which path to redirect to when the browser's URL matches
              the route's path
            */}
            <Redirect to="/welcome" />
          </Route>
          {/*
            Using the `<Route>` component from `react-router-dom` to
            define a certain path and the react component that should
            be rendered when the browser's URL matched the path defined
            in the `path` prop
          */}
          <Route path="/welcome">
            <Welcome />
          </Route>

          {/*
            NOTE: react-router checks for matching paths; meaning that
            if we define `<Route path="/products">` and `<Route path="/products/:id">`
            as routes in our app and the browsers URL is `domain.com/products/45`,
            then they will both be active because they both start which `/products`
            To prevent this from happening, `react-router-dom` provides
            the <Switch> component which will make sure to load only one
            component at a time for the first matching path. With the
            `exact` prop is added to the route, the `<Switch>` component
            will make to render the component which exactly matches the
            defined route
          */}
          <Route path="/products" exact>
            <Products />
          </Route>

          {/*
            Using the `<Route>` component from `react-router-dom` to
            define a path with a dynamic segment. The `:id` is a
            placeholder for data that we can pass to this route when it
            is active and the component that will be rendered will have
            access to this dynamic segment. The dynamic segment is also
            refered to as a route parameter
          */}
          <Route path="/products/:id">
            <ProductDetails />
          </Route>
        </Switch>
      </main>
    </div>
  );
}

export default App;
