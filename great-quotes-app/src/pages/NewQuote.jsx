import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import useHttp from '../hooks/use-http';
import { addQuote } from '../lib/api';

import { QuoteForm } from '../components';


function NewQuote(props) {
  const { sendRequest, status } = useHttp(addQuote);
  /*
    Using the `useHistory()` hook from `react-router-dom` to
    access the browser history so that we can trigger history
    changing actions. The `useHistory()` hook returns a history
    object which we can use to navigate programmatically
  */
  const history = useHistory();

  useEffect(() => {
    if (status === 'completed') {
      /*
      The history object has a `push()` method which is used to
      navigate to a new page. This method pushes a new page on
      the stack of pages that have been visited and therefore
      allows the user to navigate to a previously visited page
      by using the browser's back button.
      It also has a `replace()` method which is also used to
      navigate to a new page, however, this method replaces
      the current page with the new page in the stack history
      and therefore the user cannot navigate to a previously
      visited page by using the browser's back button.
      NOTE: Both `push()` and `replace()` methods take string
      argument representing the path we want to navigate to
    */
    history.push('/quotes');
    }
  }, [status, history]);

  const handleAddQuote = (quote) => {
    console.log('handleAddQuote called... ', quote);
    sendRequest(quote);
  }
  return (
    <section>
      <QuoteForm isLoading={ status === 'pending' } onAddQuote={ handleAddQuote } />
    </section>
  );
}

export default NewQuote;
