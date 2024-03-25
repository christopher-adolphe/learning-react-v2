import React from 'react';

import MeetupItem from './MeetupItem';

import styles from './MeetupList.module.css';

function MeetupList({ meetups }) {
  return (
    <ul className={ styles.list }>
      {
        meetups.map(meetup => (
          <li key={ meetup.id }>
            <MeetupItem meetup={ meetup } />
          </li>
        ))
      }
    </ul>
  );
}

export default MeetupList;
