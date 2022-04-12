import React, { useRef } from 'react';

import Card from '../ui/Card';

import styles from './MeetupForm.module.css';

function MeetupForm() {
  const titleElemRef = useRef('');
  const imageElemRef = useRef('');
  const addressElemRef = useRef('');
  const descriptionElemRef = useRef('');

  const addMeetupHandler = (event) => {
    event.preventDefault();

    const title = titleElemRef.current.value;
    const image = imageElemRef.current.value;
    const address = addressElemRef.current.value;
    const description = descriptionElemRef.current.value;

    const meetup = { title, image, address, description };

    console.log('New meetup: ', meetup);
  };

  return (
    <Card>
      <form className={ styles.form } onSubmit={ addMeetupHandler }>
        <div className={ styles.control }>
          <label htmlFor="title">Title</label>
          <input type="text" id="title" name="title" ref={ titleElemRef } required />
        </div>

        <div className={ styles.control }>
          <label htmlFor="image">Image</label>
          <input type="url" id="image" name="image" ref={ imageElemRef } required />
        </div>

        <div className={ styles.control }>
          <label htmlFor="address">Address</label>
          <input type="text" id="address" name="address" ref={ addressElemRef } required />
        </div>

        <div className={ styles.control }>
          <label htmlFor="description">Description</label>
          <textarea id="description" name="description" ref={ descriptionElemRef } rows="5"></textarea>
        </div>

        <div className={ styles.actions }>
          <button type="submit">Add Meetup</button>
        </div>
      </form>
    </Card>
  );
}

export default MeetupForm;
