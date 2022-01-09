import React from 'react';
import PropTypes from 'prop-types';
import './ExpensesFilter.css';

function ExpensesFilter({ onYearChange }) {
  const years = ['2022', '2021', '2020', '2019'];

  const handleOnChange = (event) => {
    onYearChange(event.target.value);
  };

  return (
    <div className="expenses-filter">
      <div className="expenses-filter__control">
        <label>Filter by year</label>
        <select onChange={ handleOnChange }>
          <option value='' defaultValue></option>
          {
            years.map((year, index) => (
              <option key={ `year-${index}` } value={ year }>{ year }</option>
            ))
          }
        </select>
      </div>
    </div>
  );
}

ExpensesFilter.prototype = {
  onYearChange: PropTypes.func.isRequired
};

export default ExpensesFilter;
