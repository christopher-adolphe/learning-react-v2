import React, { useState } from 'react';
import PropTypes from 'prop-types';
import WithCard from '../shared/WithCard/WithCard';
import Button from '../shared/Button/Button';
import styles from './UserForm.module.css';

function UserForm({ onHandleAddUser, onHandleError }) {
  const [ formData, setFormData ] = useState({ username: '', age: '' });

  const handleInputChange = (event) => {
    const { value, id: path } = event.target;

    setFormData((prevState) => ({ ...prevState, [path]: value }));
  };

  const addUser = (event) => {
    event.preventDefault();

    if (!formData.username.trim().length) {
      onHandleError('Please enter a valid username!');

      return;
    }
    
    if (!formData.age.trim().length) {
      onHandleError('Please enter a valid age!');

      return;
    }
    
    if (parseInt(formData.age) <= 0) {
      onHandleError('Please enter a valid age! Cannot be less than zero.');

      return;
    }

    const newUser = { name: formData.username.trim(), age: formData.age };

    onHandleAddUser(newUser);
    setFormData({ username: '', age: '' });
  };

  return (
    <form onSubmit={ addUser }>
      <div className={ styles['form-control'] }>
        <label htmlFor="usename">Username</label>
        <input id="username" type="text" value={ formData.username } onChange={ handleInputChange } />
      </div>

      <div className={ styles['form-control'] }>
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
