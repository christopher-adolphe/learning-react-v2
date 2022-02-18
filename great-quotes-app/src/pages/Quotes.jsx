import React, { useState, useEffect } from 'react';

import { quotesService } from '../services/';

import { QuoteList } from '../components';

function Quotes(props) {
  const [ quotes, setQuotes ] = useState([]);

  useEffect(() => {
    const quotes = quotesService.getQuotes();

    setQuotes(quotes);
  }, []);

  return (
    <section>
      <QuoteList quotes={ quotes } />
    </section>
  );
}

export default Quotes;
