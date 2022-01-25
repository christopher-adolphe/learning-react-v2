import React from 'react';
import PropTypes from 'prop-types';

import styles from './MealItem.module.css';

function MealItem({ meal }) {
  return (
    <div className={ styles['meal-item'] }>
      <div className={ styles['meal-item__content'] }>
        <h3 className={ styles['meal-item__title'] }>{ meal.title }</h3>

        <p className={ styles['meal-item__desc'] }>{ meal.description }</p>
      </div>

      <div className={ styles['meal-item__price'] }>
        <h3 className={ styles['meal-item__title-price'] }>Rs { meal.price.toFixed(2) }</h3>
      </div>
    </div>
  );
}

MealItem.propTypes = {
  meal: PropTypes.object.isRequired
};

export default MealItem;
