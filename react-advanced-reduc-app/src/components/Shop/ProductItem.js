import { useDispatch } from 'react-redux';

import { cartActions } from '../../store';

import Card from '../UI/Card';

import classes from './ProductItem.module.css';

const ProductItem = ({ id, title, price, description }) => {
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    const newItem = { id, title, price };

    newItem.quantity = 1;
    newItem.total = price;

    dispatch(cartActions.addToCart({ newItem }));
  }

  return (
    <li className={classes.item}>
      <Card>
        <header>
          <h3>{title}</h3>
          <div className={classes.price}>${price.toFixed(2)}</div>
        </header>
        <p>{description}</p>
        <div className={classes.actions}>
          <button type="button" onClick={ handleAddToCart }>Add to Cart</button>
        </div>
      </Card>
    </li>
  );
};

export default ProductItem;
