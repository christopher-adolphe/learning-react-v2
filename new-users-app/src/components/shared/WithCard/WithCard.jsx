import React from 'react';
import styles from './WithCard.module.css';

function WithCard(Component) {
  return function Card(props) {
    return (
      <div className={ styles.card }>
        <Component { ...props } />
      </div>
    );
  }
}

export default WithCard;
