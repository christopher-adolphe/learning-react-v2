import PropTypes from 'prop-types';
import ExpenseDate from './ExpenseDate';
import './ExpenseItem.css';

function ExpenseItem({ expenseDate, expenseTitle, expensePrice }) {
  return (
    <div className="expense-item">
      <ExpenseDate date={ expenseDate } />
      <div className="expense-item__description">
        <h2>{ expenseTitle}</h2>
        <div className="expense-item__price">${ expensePrice }</div>
      </div>
    </div>
  );
}

ExpenseItem.propTypes = {
  expenseDate: PropTypes.object.isRequired,
  expenseTitle: PropTypes.string.isRequired,
  expensePrice: PropTypes.number.isRequired
};

export default ExpenseItem;
