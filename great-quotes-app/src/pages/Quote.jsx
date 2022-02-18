import React, { useState, useEffect } from 'react';
import { Route, useParams } from 'react-router-dom';

import { getQuote } from '../services/quotes-service';

import { HighlightedQuote, Comments } from '../components';

function Quote(props) {
  const params = useParams();

  const [ quote, setQuote ] = useState(null);

  useEffect(() => {
    const quote = getQuote(params.id);

    setQuote(quote)
  }, [params]);

  return (
    <section>
      <HighlightedQuote quote={ quote } />

      <Route path={ `/quotes/${params.id}/comments`}>
        <Comments quoteId={ params.id } />
      </Route>
    </section>
  );
}

export default Quote;
