import { useSelector, useDispatch } from 'react-redux';

import { cartActions } from '../../store';

import classes from './CartButton.module.css';

const CartButton = (props) => {
  const cart = useSelector((state) => state.cart.cart);

  const dispatch = useDispatch();

  const handleToggleCart = () => {
    dispatch(cartActions.toggleCart());
  };

  return (
    <button className={classes.button} onClick={ handleToggleCart }>
      <span>My Cart</span>
      <span className={classes.badge}>{ cart.length }</span>
    </button>
  );
};

export default CartButton;
