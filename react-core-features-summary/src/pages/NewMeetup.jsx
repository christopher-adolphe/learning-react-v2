import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

import MeetupForm from '../components/meetups/MeetupForm';

function NewMeetup() {
  const [ error, setError ] = useState(null);
  const history = useHistory();

  const newMeetupHandler = async (meetup) => {
    try {
      const response = await fetch('', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(meetup)
      });

      if (response.ok && response.status === 200) {
        const data = await response.json();
        console.log('new meetup id: ', data);

        history.replace('/');
      } else {
        throw new Error('Something went wrong while adding new meetup.')
      }
    } catch (error) {
      setError(`Sorry! ${error.message}`);
    }
  };

  return (
    <section>
      <h1>Add New Meetup</h1>

      {
        error ? <p className="error">{ error }</p> : null
      }

      <MeetupForm onAddMeetup={ newMeetupHandler } />
    </section>
  );
}

export default NewMeetup;
