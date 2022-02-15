import { useSelector, useDispatch } from 'react-redux';

import { uiActions } from '../../store';

import classes from './CartButton.module.css';

const CartButton = (props) => {
  const quantity = useSelector(({ cart }) => cart.totalQuantity);

  const dispatch = useDispatch();

  const handleToggleCart = () => {
    dispatch(uiActions.toggleCart());
  };

  return (
    <button className={classes.button} onClick={ handleToggleCart }>
      <span>My Cart</span>
      <span className={classes.badge}>{ quantity }</span>
    </button>
  );
};

export default CartButton;
