import { useRef, useState } from 'react';

const SimpleInput = (props) => {
  // Approach 1: Using state
  const [ name, setName ] = useState('');
  const [ isNameTouched, setIsNameTouched ] = useState(false);

  // Adding derived state variables
  let isFormValid = true;
  const isNameValid = name.trim() !== '';
  const formControlClasses = (isNameTouched && !isNameValid) ? 'form-control invalid' : 'form-control';

  if (isNameTouched && !isNameValid) {
    isFormValid = false;
  }
  
  // Approach 2: Using refs
  const nameInput = useRef(null);

  const handleChange = (event) => {
    const { value } = event.target;

    setName(value);
    setIsNameTouched(true);
  };

  const handleBlur = () => {
    setIsNameTouched(true);
  }

  const handleSubmit = (event) => {
    event.preventDefault();

    setIsNameTouched(true);

    if (name.trim() === '' || !name.length ) {
      console.log('Cannot submit form');
      return;
    }

    console.log('Sending form data using state: ', name);

    console.log('Sending form data using refs: ', nameInput.current.value);

    // Resetting the name input is easier
    // when the form is manage via state
    setName('');

    // Removing invalid input status
    setIsNameTouched(false);

    // Resetting the name input when using
    // refs would technically work but this
    // is considered bad practice because
    // we would be manipulating the DOM ourself
    // and this task should be done by React
    // /!\ DON'T DO THAT
    // nameInput.current.value = '';
  };

  return (
    <form onSubmit={ handleSubmit }>
      <div className={ formControlClasses }>
        <label htmlFor='name'>Your Name</label>
        <input type='text' id='name' ref={ nameInput } value={ name } onChange={ handleChange } onBlur={ handleBlur } />

        {
          (isNameTouched && !isNameValid) ? <span className="error-text">Name is a field mandatory</span> : null
        }
      </div>

      <div className="form-actions">
        <button type="submit" disabled={ !isFormValid }>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
