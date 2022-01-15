import React from 'react';
import PropTypes from 'prop-types';

import { WithCard } from '../shared';
import UserItem from '../UserItem/UserItem';
import styles from './UserList.module.css';

function UserList({ items, onHandleDeleteUser }) {
  const renderList = () => {
    return items.length
      ? (
        <ul className={ styles['user-list']}>
          {
            items.map(user => (<li className={ styles['user-list__item']} key={ user.id }><UserItem user={ user } onDelete={ onHandleDeleteUser } /></li>))
          }
        </ul>
      )
      : (<p className={ styles['user-list__message']}>There are no users to list. Consider adding one!</p>);
  };

  return (
    renderList()
  );
}

UserList.propTypes = {
  items: PropTypes.array.isRequired,
  onHandleDeleteUser: PropTypes.func.isRequired
};

export default WithCard(UserList);
