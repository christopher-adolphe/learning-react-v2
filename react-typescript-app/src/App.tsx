import React from 'react';

import TodosContextProvider from './store/todosContext';
import NewTodo from './components/NewTodo';
import Todos from './components/Todos';


function App() {
  return (
    <TodosContextProvider>
      <NewTodo />
      <Todos />
    </TodosContextProvider>
  );
}

export default App;
