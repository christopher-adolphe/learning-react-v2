import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import WithCard from '../shared/card/WithCard';
import ExpenseDate from '../expensDate/ExpenseDate';
import './ExpenseItem.css';

const ExpenseItem = ({ expenseDate, expenseTitle, expensePrice }) => {
  return (
    <Fragment>
      <ExpenseDate date={ expenseDate } />
      <div className="expense-item__description">
        <h2>{ expenseTitle }</h2>
        <div className="expense-item__price">${ expensePrice }</div>
      </div>
    </Fragment>
  );
}

ExpenseItem.propTypes = {
  expenseDate: PropTypes.object.isRequired,
  expenseTitle: PropTypes.string.isRequired,
  expensePrice: PropTypes.number.isRequired
};

export default WithCard(ExpenseItem);
