import React, { lazy, Suspense } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import { Layout, LoadingSpinner } from './components';

/*
  Using the `lazy()` method from `React` to implement
  lazy loading of components such that the code of the
  component being rendered on a specific route is only
  downloaded when that route is active
*/
const Quotes = lazy(() => import('./pages/Quotes'));
const Quote = lazy(() => import('./pages/Quote'));
const NewQuote = lazy(() => import('./pages/NewQuote'));
const NotFound = lazy(() => import('./pages/NotFound'));

function App() {
  const loader = (
    <div className="centered">
      <LoadingSpinner />
    </div>
  );
  return (
    <Layout>
      {/*
        Using the `<Suspense>` component from `React` to render
        a fallback component when using lazy loading with on
        defined routes. The `<Suspense>` component takes a `fallback`
        prop which recieves a fallback component as value
      */}
      <Suspense fallback={ loader }>
        <Switch>
          <Route path="/" exact>
            <Redirect to="/quotes" />
          </Route>

          <Route path="/quotes" exact>
            <Quotes />
          </Route>

          <Route path="/quotes/:id">
            <Quote />
          </Route>
          
          <Route path="/add-quote">
            <NewQuote />
          </Route>

          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
      </Suspense>
    </Layout>
  );
}

export default App;
