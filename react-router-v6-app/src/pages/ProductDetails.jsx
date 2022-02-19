import React from 'react';
import { useParams } from 'react-router-dom';

function ProductDetails(props) {
  /*
    Using the `useParams()` hook from `react-router-dom` to
    access the route parameters (i.e the data from the dynamic
    segment defined in the path of the route). The `useParams()`
    hook returns a params object which will contain key-value
    pairs; the key being the part right after the `:` defined
    in the path
  */
  const params = useParams();

  return (
    <section>
      <h1>Product Details Component</h1>

      <p>Product id: { params.id }</p>
    </section>
  );
}

export default ProductDetails;
