import { configureStore } from '@reduxjs/toolkit';

import { uiReducer, cartReducer, productsReducer } from '.';

const store = configureStore({
  reducer: {
    ui: uiReducer,
    cart: cartReducer,
    products: productsReducer
  }
});

export default store;
