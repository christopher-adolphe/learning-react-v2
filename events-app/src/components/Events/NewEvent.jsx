import { Link, useNavigate } from 'react-router-dom';
import { useMutation } from '@tanstack/react-query';

import Modal from '../UI/Modal.jsx';
import EventForm from './EventForm.jsx';

import { createNewEvent } from '../../util/http.js';

export default function NewEvent() {
  const navigate = useNavigate();

  // Using the `useMutation()` hook from tanstack query
  // to make a POST request. This hook accepts a configuration
  // object as parameter where we set the `mutationFn` property
  // to the function which handles the `POST` request
  // The `useMutation()` hook returns an object which has a
  // `mutate` property which is a function we can invoke
  // any time we wish to make the `POST` request inside the
  // component's logic
  const { mutate } = useMutation({
    mutationFn: createNewEvent,
  })

  function handleSubmit(formData) {
    mutate({
      event: formData,
    });
  }

  return (
    <Modal onClose={() => navigate('../')}>
      <EventForm onSubmit={handleSubmit}>
        <>
          <Link to="../" className="button-text">
            Cancel
          </Link>
          <button type="submit" className="button">
            Create
          </button>
        </>
      </EventForm>
    </Modal>
  );
}
