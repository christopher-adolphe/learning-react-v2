import { QueryClient } from '@tanstack/react-query';

// Exporting the `queryClient` instance so that it is
// available to other modules
export const queryClient = new QueryClient();

export async function fetchEvents({ signal, searchTerm }) {
  let url = 'http://localhost:3000/events';

  if (searchTerm) {
    url = `${url}?search=${searchTerm}`;
  }
  
  const response = await fetch(url, { signal });

  if (!response.ok) {
    const error = new Error('An error occurred while fetching the events');
    error.code = response.status;
    error.info = await response.json();
    throw error;
  }

  const { events } = await response.json();

  return events;
}

export async function fetchEvent({ signal, id }) {
  const response = await fetch(`http://localhost:3000/events/${id}`, { signal });

  if (!response.ok) {
    const error = new Error(`An error occurred while fetching event with id ${id}`);

    error.code = response.status;
    error.info = await response.json();

    throw error;
  }

  const { event } = await response.json();

  return event;
}

export async function createNewEvent(eventData) {
  const response = await fetch('http://localhost:3000/events', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(eventData),
  });

  if (!response.ok) {
    const error = new Error('An error occurred while creating new event');

    error.code = response.status;
    error.info = await response.json();

    throw error;
  }

  const { event } = await response.json();

  return event;
}

export async function deleteEvent(id) {
  const response = await fetch(`http://localhost:3000/events/${id}`, {
    method: 'DELETE',
  });

  if (!response.ok) {
    const error = new Error(`An error occurred while deleting event with id: ${id}`);

    error.code = response.status;
    error.info = await response.json();

    throw error;
  }

  const { message } = await response.json();
  
  return message;
}

export async function fetchImages({ signal }) {
  const response = await fetch('http://localhost:3000/events/images', { signal });

  if (!response.ok) {
    const error = new Error('An error occurred while fetching images');

    error.code = response.status;
    error.info = await response.json();

    throw error;
  }

  const { images } = await response.json();

  return images;
}
