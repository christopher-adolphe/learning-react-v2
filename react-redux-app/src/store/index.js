import { createStore } from 'redux';

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

const counterReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case ACTIONS.INCREMENT:
      return { ...state, counter: state.counter + 1 };

    case ACTIONS.INCREASE:
      const { incrementStep } = payload;

      return { ...state, counter: state.counter + incrementStep };

    case ACTIONS.DECREMENT:
      return { ...state, counter: state.counter - 1 };
    
    case ACTIONS.TOGGLE_COUNTER:
      return { ...state, isCounterVisible: !state.isCounterVisible };
  
    default:
      return state;
  }
};

const store = createStore(counterReducer);

export default store;
