import Layout from '../../components/layout/Layout';
import NewMeetupForm from '../../components/meetups/NewMeetupForm';

function NewMeetup(props) {
  const addMeetupHandler = (meetup) => {
    console.log('addMeetupHandler called: ', meetup);
  };
  
  return <NewMeetupForm onAddMeetup={ addMeetupHandler } />;
}

export default NewMeetup;
