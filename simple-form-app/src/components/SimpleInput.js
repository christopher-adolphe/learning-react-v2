import { useRef, useState } from 'react';

const SimpleInput = (props) => {
  // Approach 1: Using state
  const [ formData, setFormData ] = useState({
    name: { value: '', isTouched: false },
    email: { value: '', isTouched: false }
  });
  
  const regExp = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  // Adding derived state variables
  let isFormValid = false;
  const isNameValid = formData.name.value.trim() !== '';
  const isNameInvalid = !isNameValid && formData.name.isTouched;
  const isEmailValid = formData.email.value.trim() !== '' && regExp.test(formData.email.value.trim());
  const isEmailInvalid = !isEmailValid && formData.name.isTouched;

  if (isNameValid && isEmailValid) {
    isFormValid = true;
  }
  
  // Approach 2: Using refs
  const nameInput = useRef(null);

  const handleChange = (event) => {
    const { id, value } = event.target;

    setFormData((prevFormData) => ({ ...prevFormData, [id]: { value, isTouched: true } }));
  };

  const handleBlur = (event) => {
    const { id } = event.target;

    setFormData((prevFormData) => ({ ...prevFormData, [id]: { ...prevFormData[id], isTouched: true } }));
  }

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!isFormValid) {
      return;
    }

    setFormData((prevFormData) => ({
      name: { ...prevFormData.name, isTouched: true },
      email: { ...prevFormData.email, isTouched: true }
    }));

    console.log('Sending form data using state: ', formData);

    console.log('Sending form data using refs: ', nameInput.current.value);

    // Resetting the form inputs
    setFormData({
      name: { value: '', isTouched: false },
      email: { value: '', isTouched: false }
    });

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
      <div className={ isNameInvalid ? 'form-control invalid' : 'form-control' }>
        <label htmlFor='name'>Your Name:</label>
        <input type='text' id='name' ref={ nameInput } value={ formData.name.value } onChange={ handleChange } onBlur={ handleBlur } />

        {
          isNameInvalid ? <span className="error-text">Name is a field mandatory</span> : null
        }
      </div>

      <div className={ isEmailInvalid ? 'form-control invalid' : 'form-control' }>
        <label htmlFor='email'>Your Email:</label>
        <input type='text' id='email' value={ formData.email.value } onChange={ handleChange } onBlur={ handleBlur } />

        {
          isEmailInvalid ? <span className="error-text">Email is a field mandatory</span> : null
        }
      </div>

      <div className="form-actions">
        <button type="submit" disabled={ !isFormValid }>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
