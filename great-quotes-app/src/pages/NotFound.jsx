import React from 'react';
import { Link } from 'react-router-dom';

function NotFound(props) {
  return (
    <section className="centered">
      <h2>Sorry, could not find requested page!</h2>

      <Link to="/" className='btn'>Back to Home</Link>
    </section>
  );
}

export default NotFound;
