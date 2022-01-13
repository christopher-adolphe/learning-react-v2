import React, { useState } from 'react';
import UserForm from './components/UserForm/UserForm';
import UserList from './components/UserList/UserList';
import Modal from './components/Modal/Modal';
import styles from './App.module.css';

function App() {
  const [ users, setUsers ] = useState([]);

  const handleAddUser = (user) => {
    const newUser = { ...user, id: `u-${Math.random().toString()}`};
    console.log('newUser: ', newUser);

    setUsers((prevState) => [ newUser, ...prevState ]);
  };

  const handleDeleteUser = (id) => {
    setUsers((prevState) => prevState.filter(user => user.id !== id));
  }

  return (
    <div className={ styles.app }>
      <UserForm onHandleAddUser={ handleAddUser } />

      <UserList items= { users } onHandleDeleteUser={ handleDeleteUser } />

      <Modal title="Invalid Input" body="Some text error" buttonLabel="Okay" />
    </div>
  );
}

export default App;
