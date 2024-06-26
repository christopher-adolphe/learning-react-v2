import { useRef, useState } from 'react';
import { useQuery } from '@tanstack/react-query';

import LoadingIndicator from '../UI/LoadingIndicator.jsx';
import ErrorBlock from '../UI/ErrorBlock.jsx';
import EventItem from './EventItem.jsx';

import { fetchEvents } from '../../util/http.js';

export default function FindEventSection() {
  const searchElement = useRef();
  const [ searchTerm, setSearchTerm ] = useState();

  const { data, isPending, isError, error } = useQuery({
    queryFn: ({ signal }) => fetchEvents({ signal, searchTerm }),
    queryKey: ['events', { searchTerm } ],
    enabled: searchTerm !== undefined, // Instruct tanstack whether or not to send the request when the component mounts
  });

  function handleSubmit(event) {
    event.preventDefault();

    setSearchTerm(searchElement.current.value);
  }

  let content = (
    <p>Please enter a search term and to find events.</p>
  );

  if (isPending) {
    content = <LoadingIndicator />
  }

  if (isError) {
    content = (
      <ErrorBlock
        title="An error occurred"
        message={ error.info?.message || 'Failed to fetch events' }
      />
    );
  }

  if (data) {
    content = (
      <ul className="events-list">
        {
          data.map(event => (
            <li key={ event.id }>
              <EventItem event={event} />
            </li>
          ))
        }
      </ul>
    );
  }

  return (
    <section className="content-section" id="all-events-section">
      <header>
        <h2>Find your next event!</h2>
        <form onSubmit={handleSubmit} id="search-form">
          <input
            type="search"
            placeholder="Search events"
            ref={searchElement}
          />
          <button>Search</button>
        </form>
      </header>

      { content }
      
    </section>
  );
}
