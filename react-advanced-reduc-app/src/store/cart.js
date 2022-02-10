import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  cart: [],
  isCartVisible: false
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart(state, action) {
      const { newItem } = action.payload;

      state.cart.push(newItem);
    },
    incrementCartItem(state, action) {
      const { id } = action.payload;
      const itemIdx = state.cart.findIndex(item => item.id === id);

      state.cart[itemIdx].amount += 1;
    },
    decrementCartItem(state, action) {
      const { id } = action.payload;
      const itemIdx = state.cart.findIndex(item => item.id === id);
      const { amount } = state.cart[itemIdx].amount;

      if (amount === 1) {
        // state.cart.splice(itemIdx, 1);
        state.cart = state.cart.filter(item => item.id !== id);
      } else {
        state.cart[itemIdx].amount -= 1;
      }
    },
    toggleCart(state) {
      state.isCartVisible = !state.isCartVisible;
    }
  }
});

export const cartActions = cartSlice.actions;

export default cartSlice.reducer;
