import React, { Component } from 'react';
import { connect } from 'react-redux';

// import { ACTIONS } from '../store/redux-store';
import { counterActions } from '../store/counter';

import classes from './Counter.module.css';

class CounterV2 extends Component {
  handleIncrement() {
    const { onIncrement } = this.props;

    onIncrement();
  }

  handleDecrement = () => {
    const { onDecrement } = this.props;

    onDecrement();
  };

  handleToggleCounter() {
    const { onToggleCounter } = this.props;

    onToggleCounter();
  }

  render() {
    const { counter, isCounterVisible } = this.props;

    return (
      <main className={classes.counter}>
        <h1>Redux Counter - Class-base Component</h1>

        {
          isCounterVisible ? <div className={classes.value}>{ counter }</div> : null
        }

        <div>
          <button onClick={ this.handleIncrement.bind(this) }>Increment</button>
          <button onClick={ this.handleDecrement }>Decrement</button>
        </div>

        <button onClick={ this.handleToggleCounter.bind(this) }>Toggle Counter</button>
      </main>
    );
  }
}

// Creating a function to map the store state to props that can
// then be used in the class-based component
const mapStateToProps = (state) => {
  return {
    counter: state.counter.counter,
    isCounterVisible: state.counter.isCounterVisible
  };
};

// Creating a function to map the store dispatch function to props
// that can then be used in the class-based component
const mapDispatchToProps = (dispatch) => {
  // return {
  //   onIncrement: () => dispatch({ type: ACTIONS.INCREMENT }),
  //   onDecrement: () => dispatch({ type: ACTIONS.DECREMENT }),
  //   onToggleCounter: () => dispatch({ type: ACTIONS.TOGGLE_COUNTER })
  // }

  return {
    onIncrement: () => dispatch(counterActions.increment()),
    onDecrement: () => dispatch(counterActions.decrement()),
    onToggleCounter: () => dispatch(counterActions.toggleCounter())
  }
};

// Using the `connect()` method from react-redux to connect
// the store to the class-based component
export default connect(mapStateToProps, mapDispatchToProps)(CounterV2);