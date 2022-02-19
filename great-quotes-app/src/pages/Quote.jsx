import React, { useEffect } from 'react';
import { Route, Link, useParams, useRouteMatch } from 'react-router-dom';

import useHttp from '../hooks/use-http';
import { getSingleQuote } from '../lib/api';

// import { getQuote } from '../services/quotes-service';

import { HighlightedQuote, Comments, LoadingSpinner } from '../components';

function Quote(props) {
  const { sendRequest, status, data: loadedQuote, error } = useHttp(getSingleQuote, true);

  const params = useParams();

  const { id } = params;

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


  useEffect(() => {
    sendRequest(id);
  }, [sendRequest, id]);

  if (status === 'pending') {
    return (
      <div className="centered">
        <LoadingSpinner />
      </div>
    );
  }

  if (error) {
    return <p className="centered focused">{ error }</p>;
  }

  if (!loadedQuote.text) {
    return <p className="centered focused">No quote found!</p>;
  }

  return (
    <section>
      <HighlightedQuote quote={ loadedQuote } />

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
