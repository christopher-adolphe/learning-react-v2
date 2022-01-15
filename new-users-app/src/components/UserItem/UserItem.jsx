import React from 'react';
import PropTypes from 'prop-types';

import styles from './UserItem.module.css';

function UserItem({ user, onDelete }) {
  const handleDelete = () => {
    onDelete(user.id)
  };

  return (
    <div className={ styles['user-item'] }>
      <p>{ user.name } ({ user.age } years old)</p>
      <button type="button" onClick={ handleDelete }>X</button>
    </div>
  );
}

UserItem.propTypes = {
  user: PropTypes.object.isRequired,
  onDelete: PropTypes.func.isRequired
};

export default UserItem;
