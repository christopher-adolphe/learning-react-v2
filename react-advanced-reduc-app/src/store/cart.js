import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  cart: [],
  isCartVisible: false,
  totalQuantity: 0
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart(state, action) {
      const { newItem } = action.payload;
      const existingItem = state.cart.find(item => item.id === newItem.id);

      if (existingItem) {
        const itemIdx = state.cart.findIndex(item => item.id === newItem.id);

        state.cart[itemIdx].quantity += 1;

        const { price, quantity } = state.cart[itemIdx];
        state.cart[itemIdx].total = price * quantity;
      } else {
        state.cart.push(newItem);
      }
      
      state.totalQuantity = state.cart.reduce((prevVal, item) => prevVal + item.quantity, 0);
    },
    removeFromCart(state, action) {
      const { id } = action.payload;
      const itemIdx = state.cart.findIndex(item => item.id === id);
      const { quantity } = state.cart[itemIdx];

      if (quantity === 1) {
        // state.cart.splice(itemIdx, 1);
        state.cart = state.cart.filter(item => item.id !== id);
      } else {
        state.cart[itemIdx].quantity -= 1;

        const { price, quantity } = state.cart[itemIdx];
        state.cart[itemIdx].total = price * quantity;
      }

      state.totalQuantity = state.cart.reduce((prevVal, item) => prevVal + item.quantity, 0);
    },
    toggleCart(state) {
      state.isCartVisible = !state.isCartVisible;
    }
  }
});

export const cartActions = cartSlice.actions;

export default cartSlice.reducer;
