import React, { useState } from 'react';
import PropTypes from 'prop-types';
import ExpenseForm from '../expenseForm/ExpenseForm';
import './NewExpense.css';

function NewExpense({ onNewExpense }) {
  const [ isFormVisible, setIsFormVisible ] = useState(false);

  const handleAddExpense = (expense) => {
    onNewExpense(expense);
    setIsFormVisible((prevIsFormVisible) => !prevIsFormVisible);
  };

  const handleFormVisibility = () => {
    setIsFormVisible((prevIsFormVisible) => !prevIsFormVisible);
  };

  return (
    <div className="new-expense">
      {
        isFormVisible
          ? <ExpenseForm onAddExpense={ handleAddExpense } onCancelExpense={ handleFormVisibility } />
          : <button type="button" onClick={ handleFormVisibility }>Add New Expense</button>
      }
    </div>
  );
}

NewExpense.propTypes = {
  onNewExpense: PropTypes.func.isRequired
};

export default NewExpense;
