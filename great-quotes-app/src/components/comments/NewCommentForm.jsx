import { useRef, useEffect } from 'react';

import useHttp from '../../hooks/use-http';
import { addComment } from '../../lib/api';

import { LoadingSpinner } from '../';

import classes from './NewCommentForm.module.css';

const NewCommentForm = ({ id, onCommentAdded }) => {
  const { sendRequest, status, error } = useHttp(addComment);
  const commentTextRef = useRef();

  console.log('id: ', id);

  useEffect(() => {
    if (status === 'completed' && !error) {
      onCommentAdded();
    }
  }, [status, error, onCommentAdded]);

  const submitFormHandler = (event) => {
    event.preventDefault();

    // optional: Could validate here

    // send comment to server
    const text = commentTextRef.current.value.trim();

    sendRequest({ commentData: { text }, quoteId: id });
  };

  return (
    <form className={classes.form} onSubmit={submitFormHandler}>
      {
        status === 'pending' ? (
          <div className="centered">
            <LoadingSpinner />
          </div>
        ) : null
      }
      <div className={classes.control} onSubmit={submitFormHandler}>
        <label htmlFor='comment'>Your Comment</label>
        <textarea id='comment' rows='5' ref={commentTextRef}></textarea>
      </div>
      <div className={classes.actions}>
        <button className='btn'>Add Comment</button>
      </div>
    </form>
  );
};

export default NewCommentForm;
