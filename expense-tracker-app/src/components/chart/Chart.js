import React from 'react';
import PropTypes from 'prop-types';
import ChartBar from '../chartBar/ChartBar';
import './Chart.css';

function Chart({ chartData }) {
  let dataPoints = [
    { label: 'Jan', value: 0 },
    { label: 'Feb', value: 0 },
    { label: 'Mar', value: 0 },
    { label: 'Apr', value: 0 },
    { label: 'May', value: 0 },
    { label: 'Jun', value: 0 },
    { label: 'Jul', value: 0 },
    { label: 'Aug', value: 0 },
    { label: 'Sep', value: 0 },
    { label: 'Oct', value: 0 },
    { label: 'Nov', value: 0 },
    { label: 'Dec', value: 0 },
  ];
  let totalMaximum = null;

  const dataPointsMapper = (data) => {
    for (const expense of data) {
      // Using the `getMonth()` Date method to get the month of each
      // expense. Since `month` is a zero-based index in the Date object,
      // we can use the `month` as an index in the `dataPoint` array
      const month = expense.date.getMonth();

      dataPoints[month].value += expense.amount; 
    }

    const dataPointsValues = dataPoints.map(data => data.value);
    totalMaximum = Math.max( ...dataPointsValues );

    return dataPoints;
  };

  return (
    <div className="chart">
      {
        dataPointsMapper(chartData).map(data => <ChartBar key={ data.label } label={ data.label } value={ data.value } maxValue={ totalMaximum } />)
      }
    </div>
  );
}

Chart.propTypes = {
  chartData: PropTypes.array.isRequired
};

export default Chart;
