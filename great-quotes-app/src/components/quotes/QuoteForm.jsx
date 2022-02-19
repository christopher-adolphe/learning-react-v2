import { Fragment, useRef, useState } from 'react';
import { Prompt } from 'react-router-dom';

import Card from '../UI/Card';
import LoadingSpinner from '../UI/LoadingSpinner';
import classes from './QuoteForm.module.css';

const QuoteForm = ({ isLoading, onAddQuote }) => {
  const authorInputRef = useRef();
  const textInputRef = useRef();
  const [ isFillingForm, setIsFillingForm ] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();

    const enteredAuthor = authorInputRef.current.value;
    const enteredText = textInputRef.current.value;

    // optional: Could validate here

    onAddQuote({ author: enteredAuthor, text: enteredText });
  };

  const handleFocus = () => {
    setIsFillingForm(true);
  };

  const handleFormCompleted = () => {
    setIsFillingForm(false);
  };

  /*
    `react-router-dom` automatically provides the location object
    to the `handlePromptMessage()` function. We can then use it to
    display further information in the prompt message
  */
  const handlePromptMessage = (location) => {
    console.log('handlePromptMessage called...', location);
    return 'The data you entered will be lost if you leave this page. Do you want to leave ?'
  }

  return (
    <Fragment>
      {/*
        Using the `<Prompt />` component from `react-router-dom` to display
        a prompt to the user when a specific condition is met before navigating
        to another page. The `<Prompt />` component take 2 props; the `when`
        prop takes a boolean value to display/hide the prompt, the `message` prop
        takes a function value to display a custom text message in the prompt
      */}
      <Prompt when={ isFillingForm } message={ handlePromptMessage } />
      <Card>
        <form className={classes.form} onFocus={ handleFocus } onSubmit={ handleSubmit }>
          {isLoading && (
            <div className={classes.loading}>
              <LoadingSpinner />
            </div>
          )}

          <div className={classes.control}>
            <label htmlFor='author'>Author</label>
            <input type='text' id='author' ref={authorInputRef} />
          </div>
          <div className={classes.control}>
            <label htmlFor='text'>Text</label>
            <textarea id='text' rows='5' ref={textInputRef}></textarea>
          </div>
          <div className={classes.actions}>
            <button className='btn' onClick={ handleFormCompleted }>Add Quote</button>
          </div>
        </form>
      </Card>
    </Fragment>
  );
};

export default QuoteForm;
