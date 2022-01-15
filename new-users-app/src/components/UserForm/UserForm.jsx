import React, { useState, useRef } from 'react';
import PropTypes from 'prop-types';

import { Button, WithCard } from '../shared';
import styles from './UserForm.module.css';

function UserForm({ onHandleAddUser, onHandleError }) {
  // const [ formData, setFormData ] = useState({ username: '', age: '' });

  // Using the `useRef()` hook to create a connection between an HTML DOM
  // element being rendered by the component and the javascript logic of
  // that component. This is useful in cases where we want to read values
  // from an input element. The `useRef()` hook returns the DOM element to
  // which it has been connected via the `ref` prop on that element
  // NOTE: The `useRef()` hook actually returns an object containing a
  // `current` key with the DOM element as its value. We can then access
  // the different properties of that DOM element `myRef.current.value`
  const usernameInput = useRef();
  const ageInput = useRef();

  const [ formError, setFormError ] = useState({ username: '', age: '' });

  // const handleInputChange = (event) => {
  //   const { value, id: path } = event.target;

  //   setFormData((prevState) => ({ ...prevState, [path]: value }));
  //   setFormError((prevState) => ({ ...prevState, [path]: '' }));
  // };

  const handleSubmit = (event) => {
    event.preventDefault();

    const username = usernameInput.current.value;
    const age = ageInput.current.value;

    if (!username.trim().length) {
      onHandleError({ title: 'Invalid Username', body: 'Please enter a valid username!' });
      setFormError((prevState) => ({ ...prevState, username: 'invalid' }));

      return;
    }
    
    if (!age.trim().length) {
      onHandleError({ title: 'Invalid Age ', body: 'Please enter a valid age!' });
      setFormError((prevState) => ({ ...prevState, age: 'invalid' }));

      return;
    }
    
    if (+age < 1) {
      onHandleError({ title: 'Invalid Age', body: 'Please enter a valid age! Cannot be less than one.' });
      setFormError((prevState) => ({ ...prevState, age: 'invalid' }));

      return;
    }

    const newUser = { name: username.trim(), age: age };

    onHandleAddUser(newUser);
    // setFormData({ username: '', age: '' });

    // Resetting the form input by using the refs
    usernameInput.current.value = '';
    ageInput.current.value = '';
    setFormError({ username: '', age: '' })
  };

  return (
    <form onSubmit={ handleSubmit }>
      <div className={ formError.username !== 'invalid' ? styles['form-control'] : `${styles['form-control']} ${styles.invalid}` }>
        <label htmlFor="usename">Username</label>
        {/* <input id="username" type="text" value={ formData.username } onChange={ handleInputChange } /> */}
        
        {/* Using the `ref` prop to create the connection between the HTML input and the component's javascript logic */}
        <input id="username" type="text" ref={ usernameInput } />
      </div>

      <div className={ formError.age !== 'invalid' ? styles['form-control'] : `${styles['form-control']} ${styles.invalid}` }>
        <label htmlFor="age">Age</label>
        {/* <input id="age" type="number" value={ formData.age } onChange={ handleInputChange } /> */}

        {/* Using the `ref` prop to create the connection between the HTML input and the component's javascript logic */}
        <input id="age" type="number" ref={ ageInput } />
      </div>

      <Button type="submit" label="Add User" />
    </form>
  );
}

UserForm.propTypes = {
  onHandleAddUser: PropTypes.func.isRequired,
  onHandleError: PropTypes.func.isRequired
};

export default WithCard(UserForm);
