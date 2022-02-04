import React from 'react';
import PropTypes from 'prop-types';

import WithCard from '../WithCard/WithCard';
import { MealItem, AddToCart } from '..';

import styles from './MealList.module.css';

function MealList({ items }) {
  return (
    <div className={ styles.meal }>
      {
        items.length
          ? (<ul className={ styles['meal__list'] }>
              {
                items.map(meal => (
                  <li key={ meal.id } className={ styles['meal__list-item'] }>
                    <MealItem meal={ meal } />

                    <AddToCart meal={ meal } />
                  </li>
                ))
              }
            </ul>)
          : <p className={ styles['meal__message'] }>Sorry, there are no meals!</p>
      }
    </div>
  );
}

MealList.propTypes = {
  items: PropTypes.array.isRequired
};

export default WithCard(MealList);
