import React from 'react';
import PropTypes from 'prop-types';
import './ChartBar.css';

function ChartBar({ label, value, maxValue }) {
  let chartBarFill = '0%';

  if (maxValue > 0) {
    chartBarFill = `${ (value / maxValue) * 100 }%`;
  }
  return (
    <div className="chart-bar">
      <div className="chart-bar__inner">
        <div className="chart-bar__fill" style={ { height: chartBarFill } }></div>
      </div>

      <div className="chart-bar__label">{ label }</div>
    </div>
  );
}

ChartBar.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.number.isRequired,
  maxValue: PropTypes.number.isRequired 
};

export default ChartBar;
