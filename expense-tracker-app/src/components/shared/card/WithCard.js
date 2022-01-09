import React from 'react';
import './Card.css';

const WithCard = (Component) => {
  return function Card(props) {
    const classes = 'card ' + props.className;

    return (
      <div className={ classes }>
        <Component { ...props } />
      </div>
    )
  };
}

export default WithCard;
