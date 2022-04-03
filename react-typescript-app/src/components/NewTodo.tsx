import React, { useRef, useContext } from 'react';

import { TodosContext } from '../store/todosContext';

import classes from './NewTodo.module.css';

const NewTodo: React.FC = () => {
  const { onAddTodo } = useContext(TodosContext);

  const newTodoFormRef = useRef<HTMLFormElement>(null);
  const todoInputRef = useRef<HTMLInputElement>(null);

  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault();

    const todoText = todoInputRef.current!.value;

    if (!todoText.trim().length) {
      return;
    }

    onAddTodo(todoText);

    newTodoFormRef.current!.reset();
  };

  return (
    <form className={ classes.form } onSubmit={ submitHandler } ref={ newTodoFormRef }>
      <div className={ classes['form-group'] }>
        <label htmlFor="todoText"></label>
        <input type="text" id="todoText" ref={ todoInputRef } />
      </div>
      <button type="submit">Add Todo</button>
    </form>
  );
}

export default NewTodo;