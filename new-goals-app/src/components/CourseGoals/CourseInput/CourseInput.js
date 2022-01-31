import React, { useState } from 'react';
import styled from 'styled-components';

import Button from '../../UI/Button/Button';
// import './CourseInput.css';

const FormControl = styled.div`
  margin: 0.5rem 0;

  & label {
    font-weight: bold;
    display: block;
    margin-bottom: 0.5rem;
    color: ${ props => (props.invalid ? 'red' : 'black') };
  }

  & input {
    display: block;
    width: 100%;
    border: 1px solid ${ props => (props.invalid ? 'red' : '#ccc') };
    background-color: ${ props => (props.invalid ? 'rgb(250, 193, 193)' : 'transparent') };
    font: inherit;
    line-height: 1.5rem;
    padding: 0 0.25rem;
  }

  & input:focus {
    outline: none;
    background: #fad0ec;
    border-color: #8b005d;
  }

  &.invalid label {
    color: red;
  }

  &.invalid input {
    border-color: red;
    background-color: rgb(250, 193, 193);
  }
`;

const CourseInput = props => {
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
      {/* <div className={ `form-control ${isValid ? `` : `invalid`}` }>
        <label>Course Goal</label>
        <input type="text" value={ enteredValue } onChange={goalInputChangeHandler} />
      </div> */}

      {/* <FormControl className={ isValid ? '' : 'invalid' }> */}
      {/*
        We can pass props to the styled component which can then be used
        inside the tagged template literal to add styles dynamically
      */}
      <FormControl invalid={ !isValid }>
        <label>Course Goal</label>
        <input type="text" value={ enteredValue } onChange={goalInputChangeHandler} />
      </FormControl>
      <Button type="submit">Add Goal</Button>
    </form>
  );
};

export default CourseInput;
