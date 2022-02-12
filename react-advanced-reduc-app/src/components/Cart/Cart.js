import { useSelector } from 'react-redux';

import Card from '../UI/Card';
import CartItem from './CartItem';

import classes from './Cart.module.css';

const Cart = (props) => {
  const cart = useSelector(({ cartSlice }) => cartSlice.cart);

  return (
    <Card className={classes.cart}>
      <h2>Your Shopping Cart</h2>
      {
        cart.length ? (
          <ul>
            {
              cart.map(item => (
                <CartItem key={ item.id } item={ item }/>
              ))
            }
          </ul>
        ) : <p>Your cart is empty!</p>
      }
    </Card>
  );
};

export default Cart;
