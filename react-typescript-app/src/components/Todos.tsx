import React, { useContext } from 'react';

import TodoItem from './TodoItem';
import { TodosContext } from '../store/todosContext';

import classes from './Todos.module.css';

const Todos: React.FC = () => {
  const { items, onRemoveTodo } = useContext(TodosContext)
  return (
    <div className={ classes.todos }>
    {
      items.length ? (
        <ul>
          {
            items.map((item, index) => (
              <li key={ index } onClick={ () => onRemoveTodo(index) }>
                <TodoItem todo={ item } />
              </li>
            ))
          }
        </ul>
      ) : (<p>Todo list is empty.</p>)
    }
    </div>
  );
}

export default Todos;
