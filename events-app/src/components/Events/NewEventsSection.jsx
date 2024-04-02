// import { useState, useEffect } from 'react';
import { useQuery } from '@tanstack/react-query';

import LoadingIndicator from '../UI/LoadingIndicator.jsx';
import ErrorBlock from '../UI/ErrorBlock.jsx';
import EventItem from './EventItem.jsx';

import { fetchEvents } from '../../util/http.js';

export default function NewEventsSection() {
  // const [data, setData] = useState();
  // const [error, setError] = useState();
  // const [isLoading, setIsLoading] = useState(false);

  // useEffect(() => {
  //   async function fetchEvents() {
  //     setIsLoading(true);
  //     const response = await fetch('http://localhost:3000/events');

  //     if (!response.ok) {
  //       const error = new Error('An error occurred while fetching the events');
  //       error.code = response.status;
  //       error.info = await response.json();
  //       throw error;
  //     }

  //     const { events } = await response.json();

  //     return events;
  //   }

  //   fetchEvents()
  //     .then((events) => {
  //       setData(events);
  //     })
  //     .catch((error) => {
  //       setError(error);
  //     })
  //     .finally(() => {
  //       setIsLoading(false);
  //     });
  // }, []);

  // Using the `useQuery()` hook from tanstack query
  // It takes a configuration object as argument where the
  // `queryFn` property should be set to a function which
  // will make the http request.
  // This object also has a `queryKey` property which is set
  // to an array of value(s) which is(are) used by tanstack
  // query as identifiers to cache GET http requests
  // The `useQuery()` hook returns a query object which contains
  // `data`, `error` and `isPending` properties which can then
  // be used inside our React component.
  // The `staleTime` property allows us to control after how
  // long should tanstack query resend the GET http if it found
  // cached data
  const { data, isPending, isError, error } = useQuery({
    queryFn: fetchEvents, // Function to invoke to make http requests
    queryKey: ['events'], // Identifier(s) to cache the response data
    staleTime: 500, // Amount of time to wait before resend http requests
    // gcTime: 1000, // Amount of time to invalidate the cached response data
  });

  let content;

  if (isPending) {
    content = <LoadingIndicator />;
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
        {data.map((event) => (
          <li key={event.id}>
            <EventItem event={event} />
          </li>
        ))}
      </ul>
    );
  }

  return (
    <section className="content-section" id="new-events-section">
      <header>
        <h2>Recently added events</h2>
      </header>
      {content}
    </section>
  );
}
