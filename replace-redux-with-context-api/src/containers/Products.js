import React, { useContext } from 'react';
// import { useSelector } from 'react-redux';
import { ProductsContext } from '../context/productsContext';

import ProductItem from '../components/Products/ProductItem';
import './Products.css';

const Products = props => {
  // const productList = useSelector(state => state.shop.products);
  const { products: productList } = useContext(ProductsContext);

  return (
    <ul className="products-list">
      {productList.map(prod => (
        <ProductItem
          key={prod.id}
          id={prod.id}
          title={prod.title}
          description={prod.description}
          isFav={prod.isFavorite}
        />
      ))}
    </ul>
  );
};

export default Products;
