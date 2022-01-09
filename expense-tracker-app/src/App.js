import React from 'react';
import Expenses from './components/expenses/Expenses';

const App = () => {
  const expenses = [
    {
      id: 'e1',
      title: 'Toilet Paper',
      amount: 94.12,
      date: new Date(2020, 7, 14),
    },
    {
      id: 'e2',
      title: 'New TV',
      amount: 799.49,
      date: new Date(2021, 2, 12)
    },
    {
      id: 'e3',
      title: 'Car Insurance',
      amount: 294.67,
      date: new Date(2021, 2, 28),
    },
    {
      id: 'e4',
      title: 'New Desk (Wooden)',
      amount: 450,
      date: new Date(2021, 5, 12),
    },
  ];
  
  // return (
  //   <div>
  //     <h1>Let's get started</h1>

  //     <Expenses items={ expenses } />
  //   </div>
  // );

  // Using `createElement()` method from React to demonstrate how
  // JSX is working under the hood to render the HTML elements of
  // a component. The `createElement()` method takes 3 arguments;
  // The 1st argument is a string representing the HTML element we want
  // to create or it can be the name of another React component
  // The 2nd argument is an object representing the attributes that
  // we want the HTML element to have
  // The 3rd argument is child node the HTML element; this can be a
  // string a case of text node or other HTML elements
  // NOTE: The reason why it is always required to have a single wrapper
  // element when using the JSX syntax is because under the hood, for
  // every component, React is returning the result of `createElement()`
  // method and we can return only on thing at a time
  return React.createElement(
    'div',
    {},
    React.createElement('h1', { className: 'test'}, 'Let\'s get started'),
    React.createElement(Expenses, { items: expenses }, )
  );
}

export default App;
