import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import { Layout } from './components';
import { Quotes, Quote, NewQuote, NotFound } from './pages';

function App() {
  return (
    <Layout>
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
    </Layout>
  );
}

export default App;
