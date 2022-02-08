// import { createStore } from 'redux';
import { createSlice, configureStore } from '@reduxjs/toolkit';

const initialState = {
  counter: 0,
  isCounterVisible: true
};

export const ACTIONS = {
  INCREMENT: 'INCREMENT',
  INCREASE: 'INCREASE',
  DECREMENT: 'DECREMENT',
  TOGGLE_COUNTER: 'TOGGLE_COUNTER'
};

// const counterReducer = (state = initialState, action) => {
//   const { type, payload } = action;

//   switch (type) {
//     case ACTIONS.INCREMENT:
//       return { ...state, counter: state.counter + 1 };

//     case ACTIONS.INCREASE:
//       const { incrementStep } = payload;

//       return { ...state, counter: state.counter + incrementStep };

//     case ACTIONS.DECREMENT:
//       return { ...state, counter: state.counter - 1 };
    
//     case ACTIONS.TOGGLE_COUNTER:
//       return { ...state, isCounterVisible: !state.isCounterVisible };
  
//     default:
//       return state;
//   }
// };

// const store = createStore(counterReducer);

// Using the `createSlice()` method from @redux/toolkit to
// prepare a slice of the global state; i.e instead of working
// directly with a huge global state, we take only the part
// we are interested to work with. The `createSlice()` method
// takes an object as argument where we specify a `name` property
// to identify the piece of state we want to work with, an
// `initialState` property which contain the default value when
// the piece of state is initialized, a `reducers` property
// which is an object where we specify the differents reducer
// functions which will update the state and returns the slice
// of the global state
// NOTE: The reducer functions specified in the `reducers` object
// represent the state transitions you would have in a normal
// reducer funtion. Each reducer function automatically recieves
// a snapshot of the current global state and inside each reducer
// function we can directly mutate the part of the global state
// we are working with and behind the scene, @redux/toolkit will
// make sure to clone the existing state to create a new global
// state and then override only the slice which was updated thus
// ensuring the immutability of the global state
// NOTE: The `createSlice()` method will automatically create
// actions with unique type identifiers behind the scene based on
// the reducer functions we specify in the `reducers` object. It
// will create an action mapper object where each action maps to
// a reducer function.
const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment(state) {
      state.counter++;
    },
    decrement(state) {
      state.counter--;
    },
    increase(state, action) {
      const { payload } = action;
      state.counter += payload.incrementStep;
    },
    toggleCounter(state) {
      state.isCounterVisible = !state.isCounterVisible
    }
  }
});

// Using `configureStore()` method from @redux/toolkit to create
// a store. It is an abstraction over Redux's `createStore()` method
// and make it easier to merge multiple reducers into a single one
// The `configureStore()` method take an object as argument to specify
// configurations. The `reducer` property is used to merge multiple
// reducers from different state slices into a global reducer function
const store = configureStore({
  reducer: counterSlice.reducer
});

// Getting the actions mapper from the slice
export const counterActions = counterSlice.actions;

export default store;
