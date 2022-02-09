import { useSelector, useDispatch } from 'react-redux';

// import { ACTIONS } from '../store/redux-store';
import { counterActions } from '../store/counter';

import classes from './Counter.module.css';

const Counter = () => {
  // Using the `useSelector()` hook method from react-redux
  // to get a slice of the store state. The `useSelector()`
  // hook take a selector function as argument which executes
  // to return the part of the state we are interested with
  // NOTE: As react-redux executes the selector function, it
  // automatically sets up a subscription to the store such
  // that the component will receive the latest snapshot of
  // the part of the state it is interested with
  const counter = useSelector(state => state.counter.counter);
  
  const isCounterVisible = useSelector(state => state.counter.isCounterVisible);

  // Using the `useDispatch()` hook method to dispatch actions
  // to the store so that we can update the state. It returns
  // a dispatch function which is used inside the component to
  // dispatch actions
  const dispatch = useDispatch();

  const handleIncrement = () => {
    // dispatch({ type: ACTIONS.INCREMENT });

    // Using the actions created by @redux/toolkit. Each action
    // will map to a corresponding the reducer function which can
    // be called as a method on the action
    dispatch(counterActions.increment());
  };

  const handleIncrease = () => {
    // dispatch({ type: ACTIONS.INCREASE, payload: { incrementStep: 5 } });

    dispatch(counterActions.increase({ incrementStep: 5 }));
  };

  const handleDecrement = () => {
    // dispatch({ type: ACTIONS.DECREMENT });

    dispatch(counterActions.decrement());
  };

  const handleToggleCounter = () => {
    // dispatch({ type: ACTIONS.TOGGLE_COUNTER });

    dispatch(counterActions.toggleCounter());
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter - Functional Component</h1>

      {
        isCounterVisible ? (<div className={classes.value}>{ counter }</div>) : null
      }

      <div>
        <button onClick={ handleIncrement }>Increment</button>
        <button onClick={ handleIncrease }>Increment by 5</button>
        <button onClick={ handleDecrement }>Decrement</button>
      </div>

      <button onClick={ handleToggleCounter }>Toggle Counter</button>
    </main>
  );
};

export default Counter;
