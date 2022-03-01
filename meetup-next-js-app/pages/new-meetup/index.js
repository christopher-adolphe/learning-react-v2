import { useRouter } from 'next/router';

import Layout from '../../components/layout/Layout';
import NewMeetupForm from '../../components/meetups/NewMeetupForm';

function NewMeetup(props) {
  const router = useRouter();

  const addMeetupHandler = async (meetup) => {
    console.log('addMeetupHandler called: ', meetup);

    const response = await fetch('/api/new-meetup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(meetup)
    });

    const data = await response.json();

    console.log('addMeetupHandler response data: ', data);

    router.push('/');
  };
  
  return <NewMeetupForm onAddMeetup={ addMeetupHandler } />;
}

export default NewMeetup;
