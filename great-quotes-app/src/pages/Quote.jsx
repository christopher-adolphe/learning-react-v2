import React, { useState, useEffect } from 'react';
import { Route, Link, useParams, useRouteMatch } from 'react-router-dom';

import { getQuote } from '../services/quotes-service';

import { HighlightedQuote, Comments } from '../components';

function Quote(props) {
  const params = useParams();

  /*
    Using the `useRouteMatch()` hook from `react-router-dom` to
    get access to route related data being internally managed by
    `react-router-dom`. This can be useful to avoid having to
    manually construct nested path which become difficult to manage
    as the app grows and path updates are required
    The `useRouteMatch()` returns a route match object containing
    information about the `path`, `url`, `params` and `isExact`
  */
  const match = useRouteMatch();

  const [ quote, setQuote ] = useState(null);

  useEffect(() => {
    const quote = getQuote(params.id);

    setQuote(quote)
  }, [params]);

  return (
    <section>
      <HighlightedQuote quote={ quote } />

      {/*
        Using the `<Route>` component from `react-router-dom` to
        conditionally display some content when the specified path
        matches exactly. By doing so, we leverage on `react-router-dom`
        to display/hide elements on the page based on the current
        path being visited. This prevents us from writing complex logic
        to achieve similar results
      */}
      <Route path={ match.path } exact>
        <div className="centered">
          <Link className="btn--flat" to={ `${match.url}/comments` }>View Comments</Link>
        </div>
      </Route>



      <Route path={ `${match.path}/comments` }>
        <Comments quoteId={ params.id } />
      </Route>
    </section>
  );
}

export default Quote;
