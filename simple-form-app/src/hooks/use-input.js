import { useState } from 'react';

const useInput = (onValidateInput) => {
  const [ inputValue, setInputValue ] = useState('');
  const [ isInputTouched, setIsInputTouched ] = useState(false);

  const isValueValid = onValidateInput(inputValue);
  const hasError = !isValueValid && isInputTouched;

  const handleBlur = () => {
    setIsInputTouched(true);
  };

  const handleChange = (event) => {
    const { value } = event.target;

    setInputValue(value);
    setIsInputTouched(true);
  };

  const handleReset = () => {
    setInputValue('');
    setIsInputTouched(false);
  }

  return { value: inputValue, isValid: isValueValid, hasError, handleBlur, handleChange, handleReset };
};

export default useInput;
