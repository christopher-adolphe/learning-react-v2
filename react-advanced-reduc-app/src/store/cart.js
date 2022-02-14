import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [],
  isCartVisible: false,
  totalQuantity: 0
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    loadCart(state, action) {
      const { items } = action.payload;

      state.items = [ ...items ];
    },
    addToCart(state, action) {
      const { newItem } = action.payload;
      const existingItem = state.items.find(item => item.id === newItem.id);

      if (existingItem) {
        const itemIdx = state.items.findIndex(item => item.id === newItem.id);

        state.items[itemIdx].quantity += 1;

        const { price, quantity } = state.items[itemIdx];
        state.items[itemIdx].total = price * quantity;
      } else {
        state.items.push(newItem);
      }
      
      state.totalQuantity = state.items.reduce((prevVal, item) => prevVal + item.quantity, 0);
    },
    removeFromCart(state, action) {
      const { id } = action.payload;
      const itemIdx = state.items.findIndex(item => item.id === id);
      const { quantity } = state.items[itemIdx];

      if (quantity === 1) {
        // state.items.splice(itemIdx, 1);
        state.items = state.items.filter(item => item.id !== id);
      } else {
        state.items[itemIdx].quantity -= 1;

        const { price, quantity } = state.items[itemIdx];
        state.items[itemIdx].total = price * quantity;
      }

      state.totalQuantity = state.items.reduce((prevVal, item) => prevVal + item.quantity, 0);
    },
    toggleCart(state) {
      state.isCartVisible = !state.isCartVisible;
    }
  }
});

export const cartActions = cartSlice.actions;

export default cartSlice.reducer;
