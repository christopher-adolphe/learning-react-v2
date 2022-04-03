import React from 'react';

import Todo from '../models/todo';

import classes from './TodoItem.module.css';

const TodoItem: React.FC<{ todo: Todo }> = ({ todo }) => {
  return (
    <div className={ classes.item }>
      <p>ID: { todo.id }</p>
      <p>{ todo.text }</p>
    </div>
  );
}

export default TodoItem;
