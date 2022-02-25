import { useState, useEffect } from 'react';

import MeetupList from '../components/meetups/MeetupList';

const MOCK_MEETUPS = [
  {
    id: 'm1',
    title: 'The First Meetup',
    image: 'https://image.shutterstock.com/image-photo/view-malaga-bullring-harbor-spain-600w-281599199.jpg',
    address: '5th Avenue, Malaga',
    description: 'This is the first meetup description'
  },
  {
    id: 'm2',
    title: 'The Second Meetup',
    image: 'https://image.shutterstock.com/image-photo/dusk-view-barcelona-spain-plaza-600w-520067140.jpg',
    address: '10th Street, Barcelona',
    description: 'This is the second meetup description'
  },
  {
    id: 'm3',
    title: 'The Third Meetup',
    image: 'https://image.shutterstock.com/image-photo/old-town-prince-palace-on-600w-427693039.jpg',
    address: '20th Avenue, Monaco',
    description: 'This is the third meetup description'
  }
];

function Home(props) {
  const [ meetups, setMeetups ] = useState([]);

  useEffect(() => {
    setMeetups(MOCK_MEETUPS);
  }, []);
  return <MeetupList meetups={ meetups } />;
}

export default Home;
