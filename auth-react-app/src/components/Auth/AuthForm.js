import { useState, useRef, useContext } from 'react';

import AppContext from '../../context/AppContext';

import classes from './AuthForm.module.css';

const API_KEY = 'AIzaSyBlCIuSUawupQYqSsxVg972q1e1t7GhsTU';
const SIGNUP_URL = `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${API_KEY}`;
const SIGNIN_URL = `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${API_KEY}`;

const AuthForm = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [ isLoading, setIsLoading ] = useState(false);
  const { onLogin } = useContext(AppContext);
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

    const requestConfig = {
      method: 'POST',
      headers: { 
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(requestPayload)
    };

    console.log('submitHandler called: ', requestPayload);

    setIsLoading(true);

    if (isLogin) {
      try {
        const signinResponse = await fetch(SIGNIN_URL, requestConfig);

        setIsLoading(false);

        if (!signinResponse.ok) {
          let errorMessage = 'Sorry, an error occurred during the signin process!';

          const { error } = await signinResponse.json();

          if (error && error.message) {
            errorMessage = error.message;

            alert(errorMessage);

            throw new Error(errorMessage);
          }
        }

        const signinData = await signinResponse.json();

        console.log('signinData: ', signinData);

        onLogin(signinData.idToken);
      } catch (error) {
        console.log(error);
      }
    } else {
      try {
        const signupResponse = await fetch(SIGNUP_URL, requestConfig);

        setIsLoading(false);

        if (!signupResponse.ok) {
          let errorMessage = 'Sorry, an error occurred during the signup process!';

          const { error } = await signupResponse.json();

          if (error && error.message) {
            errorMessage = error.message;

            alert(errorMessage);

            throw new Error(errorMessage);
          }
        }

        const signupData = await signupResponse.json();

        console.log('signupData: ', signupData);
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
          {
            isLoading ? (<p>Loading...</p>) : (<button>{isLogin ? 'Login' : 'Create Account'}</button>)
          }
          
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
