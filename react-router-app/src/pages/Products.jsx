import React from 'react';
import { Link } from 'react-router-dom';

function Products(props) {
  return (
    <section>
      <h1>Products Component</h1>

      <ul>
        <li>
          <Link to="/products/45698">An ultrawide monitor</Link>
        </li>
        
        <li>
          <Link to="/products/56789">A desktop mat</Link>
        </li>

        <li>
          <Link to="/products/23648">A mouse pad</Link>
        </li>
      </ul>
    </section>
  );
}

export default Products;
