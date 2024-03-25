import React from 'react';

import Card from '../ui/Card';

import styles from './MeetupItem.module.css';

function MeetupItem({ meetup }) {
  return (
    <Card>
      <div className={ styles.item }>
        <div className={ styles.image }>
          <img src={ meetup.image } alt={ meetup.title } />
        </div>

        <div className={ styles.content }>
          <h3>{ meetup.title }</h3>
          <address>{ meetup.address }</address>
          <p>{ meetup.description }</p>
        </div>

        <div className={ styles.actions }>
          <button type="button">Add to Favorites</button>
        </div>
      </div>
    </Card>
  );
}

export default MeetupItem;
