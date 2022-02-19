import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

function Products(props) {
  /*
    As from version 6 of `react-router-dom` the `useHistory()`
    hook has been replaced by the `useNavigate()` hook to implement
    programmatic navigation. The `useNavigate()` hook returns
    a function which can then use for imperative navigation. The
    function takes a path as first argument and an optional object
    as second argument
    
    navigate('/products', { replace: true });
    navigate(1); --> will navigate 1 page forward in the history stack
    navigate(-1); --> will navigate 1 page backward in the history stack
  */
  const navigate = useNavigate();

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
