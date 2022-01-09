import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Card from '../shared/card/Card';
import ExpenseItem from '../expenseItem/ExpenseItem';
import ExpensesFilter from '../expensesFilter/ExpensesFilter';
import './Expenses.css';

const Expenses = ({ items }) => {
  const [ expenseItems, setExpenseItems ] = useState(items);
  const [ filterMessage, setFilterMessage ] = useState('');
  
  const handleYearChange = (year) => {
    if (!year.length) {
      setExpenseItems(items);
      setFilterMessage('');
      return;
    }

    const filteredExpenses = expenseItems.filter(item => item.date.getFullYear().toString() === year);
    
    setFilterMessage(filteredExpenses.length ? '' : `Sorry we could not find any expense for the year ${year}`);
    setExpenseItems(filteredExpenses.length ? filteredExpenses : items);
  };

  useEffect(() => {
    setExpenseItems(items);
  }, [items]);

  return (
    <Card className="expenses">
      <ExpensesFilter onYearChange={ handleYearChange } />

      {
        filterMessage.length ? <p className="expenses__message">{ filterMessage }</p> : null
      }
      
      {
        expenseItems.map(expense => (
          <ExpenseItem className="expense-item" key={ expense.id } expenseDate={ expense.date } expenseTitle={ expense.title } expensePrice={ expense.amount } />
        ))
      }
    </Card>
  );
}

Expenses.prototype = {
  items: PropTypes.array.isRequired
};

export default Expenses;
