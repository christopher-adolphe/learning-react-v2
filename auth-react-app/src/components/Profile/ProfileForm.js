import { useContext, useRef, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import AppContext from '../../context/AppContext';

import classes from './ProfileForm.module.css';

const API_KEY = 'AIzaSyBlCIuSUawupQYqSsxVg972q1e1t7GhsTU';
const CHANGE_PASSWORD_URL = `https://identitytoolkit.googleapis.com/v1/accounts:update?key=${API_KEY}`;

const ProfileForm = () => {
  const { token } = useContext(AppContext);
  const history = useHistory();
  const newPassword = useRef(null);

  useEffect(() => {
    if (!token) {
      history.replace('/auth');
    }
  }, [token, history]);

  const submitHandler = async (event) => {
    event.preventDefault();

    const requestPayload = {
      idToken: token,
      password: newPassword.current.value.trim(),
      returnSecureToken: false
    };

    const requestConfig = {
      method: 'POST',
      headers: { 
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(requestPayload)
    }

    try {
      const changePasswordResponse = await fetch(CHANGE_PASSWORD_URL, requestConfig);

      if (!changePasswordResponse.ok) {
        let errorMessage = 'Sorry, something went wrong while processing password change!';
        const { error } = await changePasswordResponse.json();

        if (error & error.message) {
          errorMessage = error.message;

          alert(errorMessage);

          throw new Error(errorMessage);
        }

        // const changePasswordData = await changePasswordResponse.json();

        // console.log('changePasswordData: ', changePasswordData);
        // onLogin();

        history.replace('/');
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form className={classes.form} onSubmit={ submitHandler }>
      <div className={classes.control}>
        <label htmlFor='new-password'>New Password</label>
        <input type='password' id='new-password' ref={ newPassword } />
      </div>

      <div className={classes.action}>
        <button>Change Password</button>
      </div>
    </form>
  );
}

export default ProfileForm;
