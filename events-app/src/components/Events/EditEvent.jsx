import { Link, useNavigate, useParams } from 'react-router-dom';
import { useQuery, useMutation } from '@tanstack/react-query';

import Modal from '../UI/Modal.jsx';
import EventForm from './EventForm.jsx';
import LoadingIndicator from '../UI/LoadingIndicator.jsx';
import ErrorBlock from '../UI/ErrorBlock.jsx';

import { queryClient, fetchEvent, updateEvent } from '../../util/http.js';

export default function EditEvent() {
  const navigate = useNavigate();
  const { id } = useParams();

  const { data, isPending, isError, error } = useQuery({
    queryFn: ({ signal }) => fetchEvent({ signal, id }),
    queryKey: ['events', { id }],
  });

  const { mutate, isPending: isUpdatePending, isError: isUpdateError, error: updateError } = useMutation({
    mutationFn: updateEvent,

    // Using the `onMutate` property to implement optimitic update using the data cached be Tanstack
    onMutate: async (data) => {
      // Using the `queryClient` instance to cancel all active queries for
      // a specific key. This can be achieved by calling the `cancelQueries()`
      // method and passing it a configuration object which has a `queryKey`
      // property set to the key(s) we want to cancel
      await queryClient.cancelQueries({ queryKey: ['events', { id }] });

      // Using the `getQueryData()` method from the `queryClient` instance to
      // get access to the data before it was updated. Then we need to return
      // an object from the `onMutate` callback which has the previous data as
      // a key. This object will be available in the `context` argument of the
      // `onError` callback
      const previousEventData = queryClient.getQueryData(['events', { id }]);

      // Using the `queryClient` instance to manipulate the cache data
      // without waiting for the updated data from the response
      // The `setQueryData()` method takes 2 arguments, the first one
      // is the `queryKey` of the cache data we want to manipulate, the
      // second is the updated data that we pass to the mutation
      queryClient.setQueryData(['events', { id }], data.event);

      return { previousEventData };
    },

    // Using the `onError` property to implement rollback logic in case an error occurs during mutation
    onError: (error, data, context) => {
      // Using the `setQueryData()` method from the `queryClient` instance
      // to manipulate the cache data again and revert it back to the previous
      // state before it was updated and the error occurred. We can retrieve
      // the previous data from the `context` argument
      queryClient.setQueryData(['events', { id }], context.previousEventData);
    },

    // Using the `onSettled` property to instruct Tanstack to refetch data from the backend to ensure
    // that the frontend is in sync with the backend after the optimistic updated. The `onSettled()`
    // callback is invoked whenever the mutation is completed, no matter whether it succeeded or failed
    onSettled: () => {
      queryClient.invalidateQueries({
        queryKey: ['events', { id }],
      });
    }

    // onSuccess: () => {
    //   queryClient.invalidateQueries({
    //     queryKey: ['events'],
    //     refetchType: 'none',
    //   });

    //   navigate('/events');
    // },
  });

  function handleSubmit(formData) {
    mutate({
      id,
      event: formData,
    });

    navigate('../');
  }

  function handleClose() {
    navigate('../');
  }

  let content;

  if (isPending) {
    content = (
      <div className="center">
        <LoadingIndicator />
      </div>
    );
  }

  if (data) {
    content = (
      <EventForm inputData={ data } onSubmit={handleSubmit}>
        { isUpdatePending && 'Updating event, please wait...' }

        { !isUpdatePending && (
          <>
            <Link to="../" className="button-text">
              Cancel
            </Link>
            
            <button type="submit" className="button">
              Update
            </button>
          </>
        ) }
      </EventForm>
    );
  }

  return (
    <Modal onClose={handleClose}>
      <>
        { content }

        { isError && (
          <ErrorBlock
            title="Failed to fetch event"
            message={ error.info?.message || 'An error occurred while fetching event details' }
          />
        ) }

        { isUpdateError && (
          <ErrorBlock
            title="Failed to update event"
            message={ updateError.info?.message || 'An error occurred while updating event details' }
          />
        ) }
      </>
    </Modal>
  );
}
