import { useRef } from 'react';
import { useDispatch } from 'react-redux';

import { authActions } from '../store/auth';

import classes from './Auth.module.css';

const Auth = () => {
  const emailInput = useRef(null);
  const passwordInput = useRef(null);
  const dispatch = useDispatch();

  const handleLogin = (event) => {
    event.preventDefault();

    if (emailInput.current.value.trim() === '' || passwordInput.current.value.trim() === '') {
      return;
    }

    console.log('User is authenticated: ', { user: emailInput.current.value, password: passwordInput.current.value})

    dispatch(authActions.login());
  };

  return (
    <main className={classes.auth}>
      <section>
        <form onSubmit={ handleLogin }>
          <div className={classes.control}>
            <label htmlFor='email'>Email</label>
            <input type='email' id='email' ref={ emailInput } />
          </div>
          <div className={classes.control}>
            <label htmlFor='password'>Password</label>
            <input type='password' id='password' ref={ passwordInput } />
          </div>
          <button type="submit">Login</button>
        </form>
      </section>
    </main>
  );
};

export default Auth;
