import React from 'react';

import './Modal.css';

const modal = ({ show, closed }) => {
  console.log('modal - show: ', show);
  const classes = ['Modal', show ? 'Modal--open' : 'Modal--close'];

  return (
    <div className={ classes.join(' ') }>
      <h1>A Modal</h1>
      <button className="Button" onClick={ closed }>Dismiss</button>
    </div>
  );
};

export default modal;
