import React, { useState } from 'react';
import UserForm from './components/UserForm/UserForm';
import UserList from './components/UserList/UserList';
import Modal from './components/Modal/Modal';
import styles from './App.module.css';

function App() {
  const [ users, setUsers ] = useState([]);
  const [ isModalVisible, setIsModalVisible ] = useState(false);
  const [ modalBody, setModalBody ] = useState('');

  const handleAddUser = (user) => {
    const newUser = { ...user, id: `u-${Math.random().toString()}`};

    setUsers((prevState) => [ newUser, ...prevState ]);
  };

  const handleDeleteUser = (id) => {
    setUsers((prevState) => prevState.filter(user => user.id !== id));
  };

  const handleShowModal = (error) => {
    setModalBody(error);
    setIsModalVisible(true);
  };

  const handleHideModal = () => {
    setModalBody('');
    setIsModalVisible(false);
  };

  return (
    <div className={ styles.app }>
      <UserForm onHandleAddUser={ handleAddUser } onHandleError={ handleShowModal } />

      <UserList items= { users } onHandleDeleteUser={ handleDeleteUser } />

      <Modal title="Invalid Input" body={ modalBody } buttonLabel="Okay" isVisible={ isModalVisible } onDismiss={ handleHideModal } />
    </div>
  );
}

export default App;
