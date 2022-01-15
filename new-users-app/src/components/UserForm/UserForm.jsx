import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { Button, WithCard } from '../shared';
import styles from './UserForm.module.css';

function UserForm({ onHandleAddUser, onHandleError }) {
  const [ formData, setFormData ] = useState({ username: '', age: '' });
  const [ formError, setFormError ] = useState({ username: '', age: '' });

  const handleInputChange = (event) => {
    const { value, id: path } = event.target;

    setFormData((prevState) => ({ ...prevState, [path]: value }));
    setFormError((prevState) => ({ ...prevState, [path]: '' }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!formData.username.trim().length) {
      onHandleError({ title: 'Invalid Username', body: 'Please enter a valid username!' });
      setFormError((prevState) => ({ ...prevState, username: 'invalid' }));

      return;
    }
    
    if (!formData.age.trim().length) {
      onHandleError({ title: 'Invalid Age ', body: 'Please enter a valid age!' });
      setFormError((prevState) => ({ ...prevState, age: 'invalid' }));

      return;
    }
    
    if (+formData.age < 1) {
      onHandleError({ title: 'Invalid Age', body: 'Please enter a valid age! Cannot be less than one.' });
      setFormError((prevState) => ({ ...prevState, age: 'invalid' }));

      return;
    }

    const newUser = { name: formData.username.trim(), age: formData.age };

    onHandleAddUser(newUser);
    setFormData({ username: '', age: '' });
    setFormError({ username: '', age: '' })
  };

  return (
    <form onSubmit={ handleSubmit }>
      <div className={ formError.username !== 'invalid' ? styles['form-control'] : `${styles['form-control']} ${styles.invalid}` }>
        <label htmlFor="usename">Username</label>
        <input id="username" type="text" value={ formData.username } onChange={ handleInputChange } />
      </div>

      <div className={ formError.age !== 'invalid' ? styles['form-control'] : `${styles['form-control']} ${styles.invalid}` }>
        <label htmlFor="age">Age</label>
        <input id="age" type="number" value={ formData.age } onChange={ handleInputChange } />
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
