import React, { useState, useEffect, useReducer } from 'react';

import Card from '../UI/Card/Card';
import classes from './Login.module.css';
import Button from '../UI/Button/Button';

const emailReducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case 'INPUT_CHANGE':
      return { value: payload, isValid: payload.includes('@') };

    case 'INPUT_BLUR':
      // The `INPUT_BLUR` action does not depend on the payload but
      // on the current state
      return { value: state.value, isValid: state.value.includes('@') };
  
    default:
      return { value: '', isValid: false };
  }
};

const passwordReducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case 'INPUT_CHANGE':
      return { value: payload, isValid: payload.trim().length > 6 };

    case 'INPUT_BLUR':
      return { value: state.value, isValid: state.value.trim().length > 6 };
  
    default:
      return { value: '', isValid: false };
  }
};

const Login = (props) => {
  // const [enteredEmail, setEnteredEmail] = useState('');
  // const [emailIsValid, setEmailIsValid] = useState();
  // const [enteredPassword, setEnteredPassword] = useState('');
  // const [passwordIsValid, setPasswordIsValid] = useState();
  const [formIsValid, setFormIsValid] = useState(false);

  // The `useReducer()` hook is used to manage more complex state; i.e it prevents
  // us from having to update some state based on another state. The `useReducer()`
  // returns an array containing the snapshot of the state as 1st element and a
  // function to dispatch a new action; i.e a function to trigger an update of the
  // state. The `useReducer()` hook takes 3 arguments; the 1st one is a function
  // that is automatically triggered once an action is dispatch - it receives the
  // latest state snapshot and should return the new updated state, the 2nd argument
  // is the value with which we want to initialized the state and the 3rd argyument
  // is a function to set the initial state programmatically
  const [ emailState, dispatchEmail ] = useReducer(emailReducer, { value: '', isValid: null });
  const [ passwordState, dispatchPassword ] = useReducer(passwordReducer, { value: '', isValid: null });

  const emailChangeHandler = (event) => {
    // setEnteredEmail(event.target.value);
    
    // Using the `dispatchEmail()` function from `useReducer` to update the state
    // The function take an action as argument in the form of an object that has a
    // `type` key which describes the action being dispatched and a `payload` key
    // which represents the new value that will be used to update the state
    // NOTE: The `payload` key is optional in the action object as not all actions
    // will require a new value, some might only need to evaluate the current
    // state snapshot
    dispatchEmail({ type: 'INPUT_CHANGE', payload: event.target.value });

    // setFormIsValid(
    //   event.target.value.includes('@') && passwordState.isValid
    // );
  };

  // Extracting the `isValid` properties from the `emailState` and `passwordState`
  // to optimize the `useEffect()` hook such that it's dependency array does not
  // rely on either the `emailState` and `passwordState` objects but only on their
  // respective `isValid` key. Therefore with this approach, we are make sure that
  // we set the `useEffect()` hook dependencies with the part of the state it exactly
  // relies on
  const { isValid: isEmailValid } = emailState;
  const { isValid: isPasswordValid } = passwordState;

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      console.log('Checking validity...');
      setFormIsValid(
        isEmailValid && isPasswordValid
      );
    }, 500);

    // Returning a function to perform cleanup inside the `useEffect()` hook
    // NOTE: This cleanup function runs every time the dependencies change
    // after the first time the component is mounted and also when the component
    // is unmounted
    return () => {
      console.log('Cleaning up...')
      clearTimeout(timeoutId);
    }
  }, [isEmailValid, isPasswordValid]);

  const passwordChangeHandler = (event) => {
    // setEnteredPassword(event.target.value);
    dispatchPassword({ type: 'INPUT_CHANGE', payload: event.target.value });

    setFormIsValid(
      emailState.isValid && event.target.value.trim().length > 6
    );
  };

  const validateEmailHandler = () => {
    // setEmailIsValid(emailState.isValid);
    dispatchEmail({ type: 'INPUT_BLUR' });
  };

  const validatePasswordHandler = () => {
    // setPasswordIsValid(enteredPassword.trim().length > 6);
    dispatchPassword({ type: 'INPUT_BLUR' });
  };

  const submitHandler = (event) => {
    event.preventDefault();
    props.onLogin(emailState.value, passwordState.value);
  };

  return (
    <Card className={classes.login}>
      <form onSubmit={submitHandler}>
        <div
          className={`${classes.control} ${
            emailState.isValid === false ? classes.invalid : ''
          }`}
        >
          <label htmlFor="email">E-Mail</label>
          <input
            type="email"
            id="email"
            value={emailState.value}
            onChange={emailChangeHandler}
            onBlur={validateEmailHandler}
          />
        </div>
        <div
          className={`${classes.control} ${
            passwordState.isValid === false ? classes.invalid : ''
          }`}
        >
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={passwordState.value}
            onChange={passwordChangeHandler}
            onBlur={validatePasswordHandler}
          />
        </div>
        <div className={classes.actions}>
          <Button type="submit" className={classes.btn} disabled={!formIsValid}>
            Login
          </Button>
        </div>
      </form>
    </Card>
  );
};

export default Login;
