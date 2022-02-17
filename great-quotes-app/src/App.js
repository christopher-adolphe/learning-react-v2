import React, { useState, useEffect } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import { getQuotes } from './services/quotes-service';

import { MainNavigation, Layout, QuoteList, QuoteForm, HighlightedQuote } from './components';

function App() {
  const [ quotes, setQuotes ] = useState([]);

  useEffect(() => {
    const quotes = getQuotes();

    setQuotes(quotes);
  }, []);
  return (
    <div>
      <MainNavigation />

      <Layout>
        <Switch>
          <Route path="/" exact>
            <Redirect to="/all-quotes" />
          </Route>

          <Route path="/all-quotes" exact>
            <QuoteList quotes={ quotes } />
          </Route>

          <Route path="/all-quotes/:id">
            <HighlightedQuote />
          </Route>
          
          <Route path="/add-quote">
            <QuoteForm />
          </Route>
        </Switch>
      </Layout>
    </div>
  );
}

export default App;
