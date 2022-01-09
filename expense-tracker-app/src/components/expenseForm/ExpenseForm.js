import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './ExpenseForm.css';

function ExpenseForm({ onAddExpense }) {
  const [ formData, setFormData ] = useState({ title: '', amount: '', date: '' });

  const handleInputChange = (event) => {
    const { id: path, value } = event.target;

    // The below approach to update the state of component can lead to
    // unexpected behavior because React schedules state updates and
    // we might not get the latest previous state snapshot
    // setFormData({ ...formData, [path]: value });

    // Instead of passing the updated state directly to the `setFormData()`
    // updating function, we pass an anonymous function which will receive
    // the latest previous state snapshot provided by React. This anonymous
    // function can then return the updated state to the `setFormData()`
    // function
    setFormData((prevState) => ({ ...prevState, [path]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const newExpense = { ...formData, amount: parseFloat(formData.amount), date: new Date(formData.date) };

    onAddExpense(newExpense);
    setFormData({ title: '', amount: '', date: '' });
  };

  return (
    <form onSubmit={ handleSubmit }>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label htmlFor="title">Title</label>
          <input type="text" id="title" value={ formData.title } onChange={ handleInputChange } />
        </div>

        <div className="new-expense__control">
          <label htmlFor="amount">Amount</label>
          <input type="number" id="amount" min="0.01" step="0.01" value={ formData.amount } onChange={ handleInputChange } />
        </div>

        <div className="new-expense__control">
          <label htmlFor="date">Date</label>
          <input type="date" id="date" min="2019-01-01" max="2022-12-31" value={ formData.date } onChange={ handleInputChange } />
        </div>
      </div>

      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
}

ExpenseForm.propTypes = {
  onAddExpense: PropTypes.func.isRequired
};

export default ExpenseForm;
