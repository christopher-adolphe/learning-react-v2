import { configureStore } from '@reduxjs/toolkit';

import { cartReducer, productsReducer } from '.';

const store = configureStore({
  reducer: {
    cartSlice: cartReducer,
    productsSlice: productsReducer
  }
});

export default store;
