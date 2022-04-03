import React, { createContext, useState } from 'react';

import Todo from '../models/todo';

type TodosContextObj = {
  items: Todo[];
  onAddTodo: (text: string) => void;
  onRemoveTodo: (index: number) => void
};

export const TodosContext = createContext<TodosContextObj>({
  items: [],
  onAddTodo: (text: string) => {},
  onRemoveTodo: (index: number) => {}
});

TodosContext.displayName = 'TodosContext';

const TodosContextProvider: React.FC = ({ children }) => {
  const [ todos, setTodos ] = useState<Todo[]>([]);

  const addTodoHandler = (text: string) => {
    setTodos((prevState) => {
      const newTodo = new Todo(text);

      return [ newTodo, ...prevState];
    });
  };

  const removeTodoHandler = (index: number) => {
    setTodos((prevState) => {
      const updatedTodos = [ ...prevState ];
      updatedTodos.splice(index, 1);

      return updatedTodos;
    });
  };

  const contextValue: TodosContextObj = {
    items: todos,
    onAddTodo: addTodoHandler,
    onRemoveTodo: removeTodoHandler
  }

  return (
    <TodosContextProvider value={ contextValue }>
      { children }
    </TodosContextProvider>
  );
};

export default TodosContextProvider;
