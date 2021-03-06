import { useSelector } from 'react-redux';

import ProductItem from './ProductItem';

import classes from './Products.module.css';

const Products = (props) => {
  const products = useSelector(({ products }) => products.items);

  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      {
        products.length ? (
          <ul>
            {
              products.map(product => (
                <ProductItem
                  key={ product.id }
                  id={ product.id }
                  title={ product.title }
                  price={ product.price }
                  description={ product.description }
                />
              ))
            }
          </ul>
        ) : <p className={ classes.message }>Sorry, there are no products!</p>
      }
    </section>
  );
};

export default Products;
