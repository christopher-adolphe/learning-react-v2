import { useDispatch } from 'react-redux';

import { cartActions } from '../../store';

import classes from './CartItem.module.css';

const CartItem = ({ item }) => {
  const dispatch = useDispatch();

  const { id, title, quantity, total, price } = item;

  const handleAddItem = () => {
    dispatch(cartActions.addToCart({ newItem: item }));
  };

  const handleRemoveItem = () => {
    dispatch(cartActions.removeFromCart({ id }));
  };

  return (
    <li className={classes.item}>
      <header>
        <h3>{title}</h3>
        <div className={classes.price}>
          ${total.toFixed(2)}{' '}
          <span className={classes.itemprice}>(${price.toFixed(2)}/item)</span>
        </div>
      </header>
      <div className={classes.details}>
        <div className={classes.quantity}>
          x <span>{quantity}</span>
        </div>
        <div className={classes.actions}>
          <button type="button" onClick={ handleRemoveItem }>-</button>
          <button type="button" onClick={ handleAddItem }>+</button>
        </div>
      </div>
    </li>
  );
};

export default CartItem;
