import useInput from '../hooks/use-input';

const SimpleInputV2 = () => {
  const regExp = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  const handleValidateName = (value) => {
    return value.trim() !== '';
  };

  const handleValidateEmail = (value) => {
    return value.trim() !== '' && regExp.test(value.trim());
  }

  const {
    value: nameInput,
    isValid: isNameInputValid,
    hasError: isNameInputInvalid,
    handleBlur: handleNameBlur,
    handleChange: handleNameChange,
    handleReset: handleNameReset
  } = useInput(handleValidateName);

  const {
    value: emailInput,
    isValid: isEmailInputValid,
    hasError: isEmailInputInvalid,
    handleBlur: handleEmailBlur,
    handleChange: handleEmailChange,
    handleReset: handleEmailReset
  } = useInput(handleValidateEmail);

  // Adding derived state variables
  let isFormValid = false;

  if (isNameInputValid && isEmailInputValid) {
    isFormValid = true;
  }

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!isFormValid) {
      return;
    }

    console.log('Sending form data using state: ', { name: nameInput, email: emailInput });

    // Resetting the form inputs
    handleNameReset();
    handleEmailReset();
  };

  return (
    <form onSubmit={ handleSubmit }>
      <div className={ isNameInputInvalid ? 'form-control invalid' : 'form-control' }>
        <label htmlFor='name'>Your Name:</label>
        <input type='text' id='name' value={ nameInput } onBlur={ handleNameBlur } onChange={ handleNameChange } />

        {
          isNameInputInvalid ? <span className="error-text">Name is a field mandatory</span> : null
        }
      </div>

      <div className={ isEmailInputInvalid ? 'form-control invalid' : 'form-control' }>
        <label htmlFor='email'>Your Email:</label>
        <input type='text' id='email' value={ emailInput } onBlur={ handleEmailBlur } onChange={ handleEmailChange } />

        {
          isEmailInputInvalid ? <span className="error-text">Email is a field mandatory</span> : null
        }
      </div>

      <div className="form-actions">
        <button type="submit" disabled={ !isFormValid }>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInputV2;
