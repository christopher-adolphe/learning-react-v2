import React, { useState } from 'react';

import { UserForm, UserList, Modal } from './components';
import styles from './App.module.css';

function App() {
  const [ users, setUsers ] = useState([]);
  const [ modalOptions, setModalOptions ] = useState({ body: '', isVisible: false });

  const handleAddUser = (user) => {
    const newUser = { ...user, id: `u-${Math.random().toString()}`};

    setUsers((prevState) => [ newUser, ...prevState ]);
  };

  const handleDeleteUser = (id) => {
    setUsers((prevState) => prevState.filter(user => user.id !== id));
  };

  const handleShowModal = (error) => {
    setModalOptions({ body: error, isVisible: true });
  };

  const handleHideModal = () => {
    setModalOptions({ body: '', isVisible: false });
  };

  return (
    <div className={ styles.app }>
      <UserForm onHandleAddUser={ handleAddUser } onHandleError={ handleShowModal } />

      <UserList items= { users } onHandleDeleteUser={ handleDeleteUser } />

      <Modal title="Invalid Input" body={ modalOptions.body } buttonLabel="Okay" isVisible={ modalOptions.isVisible } onDismiss={ handleHideModal } />
    </div>
  );
}

export default App;
