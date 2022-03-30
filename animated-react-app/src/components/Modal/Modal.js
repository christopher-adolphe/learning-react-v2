import React from 'react';

import './Modal.css';

const modal = ({ closed }) => {
  // console.log('modal - show: ', show);
  // const classes = ['Modal', show === 'entering' ? 'Modal--open' : show === 'exiting' ? 'Modal--close' : null];

  return (
    // <div className={ classes.join(' ') }>
    //   <h1>A Modal</h1>
    //   <button className="Button" onClick={ closed }>Dismiss</button>
    // </div>

    <div className="Modal">
      <h1>A Modal</h1>
      <button className="Button" onClick={ closed }>Dismiss</button>
    </div>
  );
};

export default modal;
