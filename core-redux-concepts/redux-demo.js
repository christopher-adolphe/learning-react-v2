const redux = require('redux');

const initialState = {
  counter: 0
};

const ACTIONS = {
  INCREMENT: 'INCREMENT',
  DECREMENT: 'DECREMENT'
};

// Creating a reducer function which take 2 arguments;
// the current state and an action object which is used
// to indicate the reducer function what type of mutation
// it should do to return the new state
// NOTE: The 1st argument which represent the current state
// has a default value which is the initial value of the
// state. This initial value is important because the reducer
// function will be executed when the store will be initialized
// by redux
const counterReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case ACTIONS.INCREMENT:
      return { ...state, counter: state.counter + 1 };

    case ACTIONS.DECREMENT:
      return { ...state, counter: state.counter - 1 };
  
    default:
      return state;
  }
};

// Using the `createStore()` method from redux to create
// a central data store and passing the reducer function
// to be used to manage the data store.
// NOTE: When redux initializes the store, it will execute
// the reducer function which is passed to it as argument;
// thus it is important that the reducer function has an
// default value represent the initial state
const store = redux.createStore(counterReducer);

// Using the `getState()` method which is provided by redux to
// get the latest snapshot of the state from the store. Since
// no action has been triggered yet, it will return the initial
// value passed as default argument to the reducer function
console.log('initial state: ', store.getState());

// Creating a subscriber function which will be used to
// get the data from the store. It will be executed
// whenever an action is triggerd and the state is updated
const counterSubscriber = () => {
  // Using the `getState()` method which is provided by redux to
  // get the latest snapshot of the state from the created store
  // whenever the state is updated via a triggered action
  const latestState = store.getState();

  console.log('counterSubscriber - latestState: ', latestState);
};

// Using the `subscribe()` method which is provided by redux to
// the store. It takes a subscriber function as argument which will
// be executed/triggered by redux whenever the state is updated
store.subscribe(counterSubscriber);

// Using the `dispatch()` method which is provided by redux to
// the store. It takes an action object as argument to indicate
// the reducer function what type of action to perform on the
// current state to produce a new state
// NOTE: The `action` object has a `type` property which indicates
// the reducer function which state transition it should take to
// update the state. It can also have an optional `payload` property
// which is an object that contains any data required to update the
// state
let intervalId = null;

const tick = () => {
  intervalId = setInterval(() => {
    store.dispatch({ type: ACTIONS.INCREMENT });
  }, 1000);
};

const stop = () => {
  clearInterval(intervalId);
};

tick();
setTimeout(() => {
  stop();
  store.dispatch({ type: ACTIONS.DECREMENT });
}, 8000);
