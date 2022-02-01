import useInputV2 from "../hooks/use-inputV2";

const BasicForm = () => {
  const regExp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  const handleValidateName = (value) => {
    return value.trim() !== '';
  };

  const handleValidateEmail = (value) => {
    return value.trim() !== '' && value.match(regExp);
  };

  const {
    value: firstNameValue,
    isValid: isFirstNameValid,
    hasError: firstNameHasError,
    handleBlur: handleFirstNameBlur,
    handleChange: handleFirstNameChange,
    handleReset: handleFirstNameReset
  } = useInputV2(handleValidateName);

  const {
    value: lastNameValue,
    isValid: isLastNameValid,
    hasError: lastNameHasError,
    handleBlur: handleLastNameBlur,
    handleChange: handleLastNameChange,
    handleReset: handleLastNameReset
  } = useInputV2(handleValidateName);

  const {
    value: emailValue,
    isValid: isEmailValid,
    hasError: emailHasError,
    handleBlur: handleEmailBlur,
    handleChange: handleEmailChange,
    handleReset: handleEmailReset
  } = useInputV2(handleValidateEmail);

  let isFormValid = false;

  if (isFirstNameValid && isLastNameValid && isEmailValid) {
    isFormValid = true;
  }

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!isFormValid) {
      return;
    }

    console.log('Sending form data: ', { firstName: firstNameValue, lastName: lastNameValue, email: emailValue });

    handleFirstNameReset('');
    handleLastNameReset('');
    handleEmailReset('');
  };

  return (
    <form onSubmit={ handleSubmit }>
      <div className='control-group'>
        <div className={ firstNameHasError ? 'form-control invalid' : 'form-control' }>
          <label htmlFor='fName'>First Name</label>
          <input type='text' id='fName' value={ firstNameValue } onBlur={ handleFirstNameBlur} onChange={ handleFirstNameChange } />
          {
            firstNameHasError ? <span className="error-text">First Name is mandatory</span> : null
          }
        </div>

        <div className={ lastNameHasError ? 'form-control invalid' : 'form-control' }>
          <label htmlFor='lName'>Last Name</label>
          <input type='text' id='lName' value={ lastNameValue } onBlur={ handleLastNameBlur } onChange={ handleLastNameChange } />
          {
            lastNameHasError ? <span className="error-text">Last Name is mandatory</span> : null
          }
        </div>
      </div>

      <div className={ emailHasError ? 'form-control invalid' : 'form-control' }>
        <label htmlFor='email'>E-Mail Address</label>
        <input type='text' id='email' value={ emailValue } onBlur={ handleEmailBlur } onChange={ handleEmailChange } />
        {
          emailHasError ? <span className="error-text">E-Mail is mandatory</span> : null
        }
      </div>

      <div className='form-actions'>
        <button type="submit" disabled={ !isFormValid }>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
