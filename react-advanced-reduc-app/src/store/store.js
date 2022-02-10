import { configureStore } from '@reduxjs/toolkit';

import { cartReducer } from '.';

const store = configureStore({
  reducer: cartReducer
});

export default store;
