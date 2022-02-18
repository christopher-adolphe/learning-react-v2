import React, { Fragment } from 'react';

import classes from './HighlightedQuote.module.css';

const HighlightedQuote = ({ quote }) => {
  return (
    <Fragment>
      {
        quote ? (
          <figure className={classes.quote}>
            <p>{ quote.text }</p>
            <figcaption>{ quote.author }</figcaption>
          </figure>
        ) : <h3>Sorry, we could not find the requested quote!</h3>
      }
    </Fragment>
  );
};

export default HighlightedQuote;
