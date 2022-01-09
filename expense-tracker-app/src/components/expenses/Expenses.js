import React from 'react';
import PropTypes from 'prop-types';
import Card from '../shared/card/Card';
import ExpenseItem from '../expenseItem/ExpenseItem';
import './Expenses.css';

const Expenses = ({ items }) => {
  return (
    <Card className="expenses">
      {
        items.map(expense => (
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
