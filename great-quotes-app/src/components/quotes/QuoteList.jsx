import { Fragment } from 'react';
import { useHistory, useLocation } from 'react-router-dom';

import QuoteItem from './QuoteItem';
import classes from './QuoteList.module.css';

const sortQuotes = (quotes, ascending) => {
  return quotes.sort((quoteA, quoteB) => {
    if (ascending) {
      return quoteA.id > quoteB.id ? 1 : -1;
    } else {
      return quoteA.id < quoteB.id ? 1 : -1;
    }
  });
};

const QuoteList = ({ quotes }) => {
  const history = useHistory();
  /*
    Using the `useLocation()` hook from `react-router-dom` to
    get information about the currently loaded page;
  */
  const location = useLocation();

  /*
    Using the `URLSearchParams()` constructor to extract the
    query parameters from the location object. The constructor
    will instantiate a new URLSearchParams object which has
    methods like `get()` to extract query parameters information
  */
  const queryParams = new URLSearchParams(location.search);

  const isSortingAscending = queryParams.get('sort') === 'asc';

  const sortedQuotes = sortQuotes(quotes, isSortingAscending);

  const handleSorting = () => {
    /*
      Using the history object to navigate to a
      path with a query parameter
    */
    history.push(`/quotes?sort=${ isSortingAscending ? 'desc' : 'asc'}`);
  };

  return (
    <Fragment>
      <div className={ classes.sorting }>
        <button onClick={ handleSorting }>Sort { isSortingAscending ? 'Descending' : 'Ascending' }</button>
      </div>
      
      <ul className={classes.list}>
        {sortedQuotes.map((quote) => (
          <QuoteItem
            key={quote.id}
            id={quote.id}
            author={quote.author}
            text={quote.text}
          />
        ))}
      </ul>
    </Fragment>
  );
};

export default QuoteList;
