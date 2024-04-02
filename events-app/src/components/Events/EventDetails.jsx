import react from 'react';
import { Link, Outlet, useParams, useNavigate } from 'react-router-dom';
import { useQuery, useMutation } from '@tanstack/react-query';

import Header from '../Header.jsx';
import LoadingIndicator from '../UI/LoadingIndicator.jsx';
import ErrorBlock from '../UI/ErrorBlock.jsx';
import Modal from '../UI/Modal.jsx';

import { fetchEvent, deleteEvent, queryClient } from '../../util/http.js';

export default function EventDetails() {
  const { id } = useParams();

  const navigate = useNavigate();

  const [ isDeleting, setIsDeleting ] = react.useState(false);

  const { data, isPending, isError, error } = useQuery({
    queryFn: ({ signal }) => fetchEvent({ signal, id }),
    queryKey: ['events', { id }],
  });

  const { mutate, isPending: isDeletePending, isError: isDeleteError, error: deleteError  } = useMutation({
    mutationFn: deleteEvent,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ['events'],
        refetchType: 'none',
      });

      navigate('/events');
    },
  });

  function handleStartDelete() {
    setIsDeleting(true);
  }

  function handleCancelDelete() {
    setIsDeleting(false);
  }

  function handleDeleteEvent() {
    mutate(id);
  }

  let content;

  if (isPending) {
    content = (
      <div id="event-details-content" className="center">
        <LoadingIndicator />
      </div>
    );
  }

  if (isError) {
    content = (
      <div id="event-details-content" className="center">
        <ErrorBlock
          title="Failed to fetch event"
          message={ error.info?.message || 'An error occurred while fetching event details' }
        />
      </div>
    );
  }

  if (data) {
    const { title, description, image, date, time, location } = data;
    const formattedDate = new Date(date).toLocaleDateString('en-US', {
      day: 'numeric',
      month: 'short',
      year: 'numeric',
    });

    content = (
      <>
        <header>
          <h1>{ title }</h1>

          <nav>
            <button onClick={ handleStartDelete }>Delete</button>
            <Link to="edit">Edit</Link>
          </nav>
        </header>

        <div id="event-details-content">
          <img src={ `http://localhost:3000/${image}` } alt={ title } />
          <div id="event-details-info">
            <div>
              <p id="event-details-location">{ location }</p>
              <time dateTime={`Todo-DateT$Todo-Time`}>{ formattedDate } @ { time }</time>
            </div>
            <p id="event-details-description">{ description }</p>
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <Outlet />
      <Header>
        <Link to="/events" className="nav-item">
          View all Events
        </Link>
      </Header>

      <article id="event-details">
        { content }
      </article>

      { isDeleting && (
        <Modal onClose={ handleCancelDelete }>
          <h2>Are you sure?</h2>

          <p>You are about to delete this event. This action cannot be undone.</p>

          <p>Do you want to proceed?</p>

          <div className="form-actions">
            { isDeletePending && <p>Deleting event, please wait...</p> }

            { !isDeletePending && (
              <>
                <button className="button-text" onClick={ handleCancelDelete }>Cancel</button>

                <button className="button" onClick={ handleDeleteEvent }>Delete</button>
              </>
            ) }
          </div>

          { isDeleteError && (
            <ErrorBlock
              title="Failed to delete event"
              message={ deleteError.info?.message || 'An error occurred while deleting event details' }
            />
          ) }
        </Modal>
      ) }
    </>
  );
}
