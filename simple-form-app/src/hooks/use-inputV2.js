import { useReducer } from 'react';

const ACTION = {
  CHANGE: 'CHANGE',
  BLUR: 'BLUR',
  RESET: 'RESET'
};

const initialState = { value: '', isTouched: false };

const inputReducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case ACTION.CHANGE:
      return { value: payload.value, isTouched: state.isTouched };

    case ACTION.BLUR:
      return { value: state.value, isTouched: true };

    case ACTION.RESET:
      return { ...initialState };
  
    default:
      return state;
  }
};

const useInputV2 = (onValidateInput) => {
  const [ input, dispatchInput ] = useReducer(inputReducer, initialState);

  const isValueValid = onValidateInput(input.value);
  const hasError = !isValueValid && input.isTouched;

  const handleBlur = () => {
    dispatchInput({ type: ACTION.BLUR });
  };

  const handleChange = (event) => {
    const { value } = event.target;

    dispatchInput({ type: ACTION.CHANGE, payload: { value } });
  };

  const handleReset = () => {
    dispatchInput({ type: ACTION.RESET });
  }

  return { value: input.value, isValid: isValueValid, hasError, handleBlur, handleChange, handleReset };
};

export default useInputV2;