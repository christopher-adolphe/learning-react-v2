import { useState, useEffect, useCallback } from 'react';

import useHttp from '../../hooks/use-http';
import { getAllComments } from '../../lib/api';

// import { commentsService } from '../../services';

import { NewCommentForm, CommentsList, LoadingSpinner } from '../';

import classes from './Comments.module.css';

const Comments = ({ quoteId }) => {
  const { sendRequest, status, data: loadedComments } = useHttp(getAllComments, true);
  const [isAddingComment, setIsAddingComment] = useState(false);
  let commentsList;
  console.log('quoteId: ', quoteId);

  useEffect(() => {
    sendRequest(quoteId);
  }, [sendRequest, quoteId]);

  const startAddCommentHandler = () => {
    setIsAddingComment(true);
  };

  const handleCommentAdded = useCallback(() => {
    sendRequest(quoteId);
  }, [sendRequest, quoteId]);

  if (status === 'pending') {
    commentsList = (
      <div className="centered">
        <LoadingSpinner />
      </div>
    );
  }

  if (status === 'completed' && (loadedComments && loadedComments.length > 0)) {
    commentsList = <CommentsList comments={ loadedComments } />;
  }

  if (status === 'completed' && (!loadedComments && loadedComments.length === 0)) {
    commentsList = (
      <div className="centered">
        <p>No comments have been added yet!</p>
      </div>
    );
  }
  
  return (
    <section className={classes.comments}>
      <h2>User Comments</h2>
      {!isAddingComment && (
        <button className='btn' onClick={startAddCommentHandler}>
          Add a Comment
        </button>
      )}
      {isAddingComment && <NewCommentForm id={ quoteId } onCommentAdded={ handleCommentAdded } />}
      
      {
        commentsList
      }
    </section>
  );
};

export default Comments;
