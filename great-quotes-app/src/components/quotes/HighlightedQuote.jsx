import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { getQuote } from '../../services/quotes-service';

import classes from './HighlightedQuote.module.css';

const HighlightedQuote = (props) => {
  const params = useParams();

  const [ quote, setQuote ] = useState(null)

  useEffect(() => {
    const quote = getQuote(params.id);

    setQuote(quote)
  }, [params]);

  return (
    <figure className={classes.quote}>
      <p>{ quote ? quote.text : '' }</p>
      <figcaption>{ quote ? quote.author : '' }</figcaption>
    </figure>
  );
};

export default HighlightedQuote;
