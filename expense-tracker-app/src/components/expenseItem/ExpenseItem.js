import React, { Fragment, useState } from 'react';
import PropTypes from 'prop-types';
import WithCard from '../shared/card/WithCard';
import ExpenseDate from '../expensDate/ExpenseDate';
import './ExpenseItem.css';

const ExpenseItem = ({ expenseDate, expenseTitle, expensePrice }) => {
  // Using the `useState()` hook method to register a state for the
  // component instance in which it is being called
  const [ title, setTitle ] = useState(expenseTitle);

  const handleChangeTitle = () => {
    setTitle('Updated!!');
  };

  return (
    <Fragment>
      <ExpenseDate date={ expenseDate } />
      <div className="expense-item__description">
        <h2>{ title }</h2>
        <div className="expense-item__price">${ expensePrice }</div>
      </div>
      <button type="button" onClick={ handleChangeTitle }>Change Title</button>
    </Fragment>
  );
}

ExpenseItem.propTypes = {
  expenseDate: PropTypes.object.isRequired,
  expenseTitle: PropTypes.string.isRequired,
  expensePrice: PropTypes.number.isRequired
};

export default WithCard(ExpenseItem);
