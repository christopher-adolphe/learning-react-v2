import { createStore } from 'redux';

// Initializing the initial state to be passed as
// default value to the reducer function
const initialCounterState = {
  counter: 0,
  isCounterVisible: true
};

// Initializing the state transition of the
// reducer function as constants to prevent
// typo
export const ACTIONS = {
  INCREMENT: 'INCREMENT',
  INCREASE: 'INCREASE',
  DECREMENT: 'DECREMENT',
  TOGGLE_COUNTER: 'TOGGLE_COUNTER'
};

// Creating a reducer function which will handle dispatched
// action. It take the current state as 1st argument which is
// given the default value of the initial state when the reducer
// function is executed the first time. The 2nd argument is an
// `action` object which will indicate the reducer function which
// state transition path to take in order to update the state
// The `action` object has a `type` property and an option `payload`
// property
const counterReducer = (state = initialCounterState, action) => {
  const { type, payload } = action;

  switch (type) {
    case ACTIONS.INCREMENT:
      return { ...state, counter: state.counter + 1 };

    case ACTIONS.INCREASE:
      const { incrementStep } = payload;

      return { ...state, counter: state.counter + incrementStep };

    case ACTIONS.DECREMENT:
      return { ...state, counter: state.counter - 1 };
  
    default:
      return state;
  }
};

// Using the `createStore()` method to create a Redux store
// which takes a reducer function as argument and returns
// an object that holds the complete state of the app
const store = createStore(counterReducer);

export default store;
