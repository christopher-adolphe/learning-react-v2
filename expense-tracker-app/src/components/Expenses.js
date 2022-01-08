import PropTypes from 'prop-types';
import ExpenseItem from './ExpenseItem';
import './Expenses.css';

function Expenses({ items }) {
  return (
    <div className="expenses">
      {
        items.map(expense => (
          <ExpenseItem key={ expense.id } expenseDate={ expense.date } expenseTitle={ expense.title } expensePrice={ expense.amount } />
        ))
      }
    </div>
  );
}

Expenses.prototype = {
  items: PropTypes.array.isRequired
};

export default Expenses;
