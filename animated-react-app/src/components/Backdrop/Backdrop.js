import React from 'react';

import './Backdrop.css';

const backdrop = ({ show }) => {
  const classes = ['Backdrop', show ? 'Backdrop--open' : 'Backdrop--close'];
  
  return (
    <div className={ classes.join(' ') }></div>
  );
};

export default backdrop;
