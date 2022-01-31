import React, { useState } from 'react';
import ButtonV2 from '../../UI/ButtonV2/ButtonV2';
import styles from './CourseInputV2.module.css';

function CourseInputV2(props) {
  const [enteredValue, setEnteredValue] = useState('');
  const [ isValid, setIsValid ] = useState(true);

  const goalInputChangeHandler = event => {
    if (event.target.value.trim().length) {
      setIsValid(true);
    }

    setEnteredValue(event.target.value);
  };

  const formSubmitHandler = event => {
    event.preventDefault();

    if (!enteredValue.trim().length) {
      setIsValid(false);
      return;
    }

    props.onAddGoal(enteredValue);
    setEnteredValue('');
  };

  return (
    <form onSubmit={formSubmitHandler}>
      <div className={ isValid ? `${styles['form-control']}` : `${styles['form-control']} ${styles.invalid}` }>
        <label>Course Goal</label>
        <input type="text" value={ enteredValue } onChange={goalInputChangeHandler} />
      </div>

      {/* Using the button component with css module */}
      <ButtonV2 type="submit">Add Goal</ButtonV2>
    </form>
  );
}

export default CourseInputV2;
