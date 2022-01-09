import React from 'react';
import ExpenseForm from '../expenseForm/ExpenseForm';
import './NewExpense.css';

function NewExpense(props) {
  return (
    <div className="new-expense">
      <ExpenseForm />
    </div>
  );
}

export default NewExpense;
