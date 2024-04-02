import { Link, Outlet, useParams, useNavigate } from 'react-router-dom';
import { useQuery, useMutation } from '@tanstack/react-query';

import Header from '../Header.jsx';
import LoadingIndicator from '../UI/LoadingIndicator.jsx';
import ErrorBlock from '../UI/ErrorBlock.jsx';

import { fetchEvent, deleteEvent, queryClient } from '../../util/http.js';

export default function EventDetails() {
  const { id } = useParams();

  const navigate = useNavigate();

  const { data, isPending, isError, error } = useQuery({
    queryFn: ({ signal }) => fetchEvent({ signal, id }),
    queryKey: ['events', { id }],
  });

  const { mutate, isError: isDeleteError, error: deleteError  } = useMutation({
    mutationFn: deleteEvent,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ['events'],
      });

      navigate('/events');
    },
  });

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
            <button onClick={ handleDeleteEvent }>Delete</button>
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

        { isDeleteError && (
          <ErrorBlock
            title="Failed to delete event"
            message={ deleteError?.info.message || 'An error occurred while deleting event details' }
          />
        ) }
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
    </>
  );
}
