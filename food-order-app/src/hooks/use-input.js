import { useReducer, useCallback } from 'react';

const ACTIONS = {
  CHANGE: 'CHANGE',
  BLUR: 'BLUR',
  VALIDATE: 'VALIDATE',
  RESET: 'RESET'
};

const initialState = { value: '', isTouched: false, isValid: true, error: null };

const inputReducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case ACTIONS.CHANGE:
      
      return { ...state, value: payload.value };

    case ACTIONS.BLUR:
      
      return { ...state, isTouched: true };

    case ACTIONS.VALIDATE:
      const [ validators ] = payload.validators;
      let error = null;

      for (const validator of validators) {
        error = validator(state.value);
        
        if (error !== null) {
          break;
        }
      }

      const isValid = error !== null ? false : true;
      
      return { ...state, isValid, error };

    case ACTIONS.RESET:
      
      return { value: '', isTouched: false, isValid: true };
  
    default:
      return state;
  }
};

function useInput() {
  const [ input, dispatchInput ] = useReducer(inputReducer, initialState);

  const handleChange = (event) => {
    dispatchInput({ type: ACTIONS.CHANGE, payload: { value: event.target.value } });
  };

  const handleBlur = () => {
    dispatchInput({ type: ACTIONS.BLUR });
  };

  const handleValidation = useCallback((...validators) => {
    dispatchInput({ type: ACTIONS.VALIDATE, payload: { validators: [ validators ] }});
  }, []);

  const handleReset = () => {
    dispatchInput({ type: ACTIONS.RESET });
  };



  return { input, handleChange, handleBlur, handleValidation, handleReset };
};

export default useInput;
