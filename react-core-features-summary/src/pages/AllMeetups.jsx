import React, { useState, useEffect } from 'react';

import MeetupList from '../components/meetups/MeetupList';

// const DUMMY_DATA = [
//   {
//     id: 'm1',
//     title: 'This is a first meetup',
//     image:
//       'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/2560px-Stadtbild_M%C3%BCnchen.jpg',
//     address: 'Meetupstreet 5, 12345 Meetup City',
//     description:
//       'This is a first, amazing meetup which you definitely should not miss. It will be a lot of fun!',
//   },
//   {
//     id: 'm2',
//     title: 'This is a second meetup',
//     image:
//       'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/2560px-Stadtbild_M%C3%BCnchen.jpg',
//     address: 'Meetupstreet 5, 12345 Meetup City',
//     description:
//       'This is a first, amazing meetup which you definitely should not miss. It will be a lot of fun!',
//   },
// ];

function AllMeetups() {
  const [ meetups, setMeetups ] = useState([]);
  const [ isLoading, setIsLonding ] = useState(false);

  const getMeetups = async () => {
    try {
      setIsLonding(true);
      const response = await fetch('');

      if (response.ok && response.status === 200) {
        const data = await response.json();
        console.log('getMeetups: ', data);
        setMeetups(Object.keys(data).map(key => ({ id: key, ...data[key] })));
      } else {
        throw new Error('Something went wrong while fetching the list of meetups.');
      }
    } catch (error) {
      console.log(error.message);
    } finally {
      setIsLonding(false);
    }
  };

  useEffect(() => {
    getMeetups();
  }, []);

  return (
    <section>
      <h1>All Meetups</h1>

      {
        isLoading ? <p>Loading meetups...</p> : <MeetupList meetups={ meetups } />
      }
    </section>
  );
}

export default AllMeetups;
