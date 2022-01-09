import React from 'react';
import PropTypes from 'prop-types';
import ExpenseForm from '../expenseForm/ExpenseForm';
import './NewExpense.css';

function NewExpense({ onNewExpense }) {
  const handleAddExpense = (expense) => {
    onNewExpense(expense);
  };

  return (
    <div className="new-expense">
      <ExpenseForm onAddExpense={ handleAddExpense } />
    </div>
  );
}

NewExpense.propTypes = {
  onNewExpense: PropTypes.func.isRequired
};

export default NewExpense;
