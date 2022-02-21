import { useState, useRef } from 'react';

import classes from './AuthForm.module.css';

const API_KEY = '';
const SIGNUP_URL = ``;

const AuthForm = () => {
  const [isLogin, setIsLogin] = useState(true);
  const email = useRef(null);
  const password = useRef(null)

  const switchAuthModeHandler = () => {
    setIsLogin((prevState) => !prevState);
  };

  const submitHandler = async (event) => {
    event.preventDefault();

    const requestPayload = {
      email: email.current.value.trim(),
      password: password.current.value.trim(),
      returnSecureToken: true
    };

    console.log('submitHandler called: ', requestPayload);

    if (isLogin) {

    } else {
      try {
        const signUpResponse = await fetch(SIGNUP_URL, {
          method: 'POST',
          headers: { 
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(requestPayload)
        });

        if (!signUpResponse.ok) {
          const { error } = await signUpResponse.json();
          throw new Error(`Sorry, an error occurred during the signup process! ${error.message}`);
        }

        const signUpData = await signUpResponse.json();

        console.log('signUpData: ', signUpData);
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <section className={classes.auth}>
      <h1>{isLogin ? 'Login' : 'Sign Up'}</h1>
      <form onSubmit={ submitHandler }>
        <div className={classes.control}>
          <label htmlFor='email'>Your Email</label>
          <input type='email' id='email' ref={ email } required />
        </div>
        <div className={classes.control}>
          <label htmlFor='password'>Your Password</label>
          <input type='password' id='password' ref={ password } required />
        </div>
        <div className={classes.actions}>
          <button>{isLogin ? 'Login' : 'Create Account'}</button>
          <button
            type='button'
            className={classes.toggle}
            onClick={switchAuthModeHandler}
          >
            {isLogin ? 'Create new account' : 'Login with existing account'}
          </button>
        </div>
      </form>
    </section>
  );
};

export default AuthForm;
