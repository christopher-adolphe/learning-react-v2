import React from 'react';

import styles from './WithCard.module.css';

function WithCard(Component) {
  return function Card(props) {
    const renderClasses = () => {
      return props.className ? `${styles.card} ${props.className}` : `${styles.card}`;
    };

    return (
      <div className={ renderClasses() }>
        <Component { ...props } />
      </div>
    );
  }
}

export default WithCard;
