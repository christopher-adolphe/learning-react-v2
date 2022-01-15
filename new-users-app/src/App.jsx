import React, { useState } from 'react';
import ReactDOM from 'react-dom'

import { UserForm, UserList, Modal } from './components';
import styles from './App.module.css';

function App() {
  const [ users, setUsers ] = useState([]);
  const [ modalOptions, setModalOptions ] = useState({ title: '', body: '', isVisible: false });

  const handleAddUser = (user) => {
    const newUser = { ...user, id: `u-${Math.random().toString()}`};

    setUsers((prevState) => [ newUser, ...prevState ]);
  };

  const handleDeleteUser = (id) => {
    setUsers((prevState) => prevState.filter(user => user.id !== id));
  };

  const handleShowModal = ({ title, body }) => {
    setModalOptions({ title, body, isVisible: true });
  };

  const handleHideModal = () => {
    setModalOptions({ title: '', body: '', isVisible: false });
  };

  return (
    <div className={ styles.app }>
      <UserForm onHandleAddUser={ handleAddUser } onHandleError={ handleShowModal } />

      <UserList items= { users } onHandleDeleteUser={ handleDeleteUser } />

      {/* Using the `createPortal()` method from react-dom to render the Modal component */}
      {/* at a specified location in the DOM; i.e the `modal-root` div element */}
      {
        ReactDOM.createPortal(
          <Modal title={ modalOptions.title } body={ modalOptions.body } buttonLabel="Okay" isVisible={ modalOptions.isVisible } onDismiss={ handleHideModal } />,
          document.getElementById('modal-root')
        )
      }
    </div>
  );
}

export default App;
