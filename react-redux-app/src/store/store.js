import { configureStore } from '@reduxjs/toolkit';

import { authSlice, counterSlice } from './';

// Using `configureStore()` method from @redux/toolkit to create
// a store. It is an abstraction over Redux's `createStore()` method
// and make it easier to merge multiple reducers into a single one
// The `configureStore()` method take an object as argument to specify
// configurations. The `reducer` property is used to merge multiple
// reducers from different state slices into a root reducer function
// If it receive a single reducer function as value, then latter is
// directly used as root reducer for the store. If it is a object of
// slice reducer functions, then it will merge the into a root reducer
const store = configureStore({
  reducer: {
    counter: counterSlice.reducer,
    auth: authSlice.reducer
  }
});

export default store;
