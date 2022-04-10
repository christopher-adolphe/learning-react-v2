import { useCallback, useReducer } from 'react';

const HTTP_ACTIONS = {
  SEND: 'SEND',
  RESPONSE: 'RESPONSE',
  ERROR: 'ERROR',
  CLEAR: 'CLEAR'
};

const initialState = {
  isLoading: false,
  error: null,
  data: null,
  requestOption: null,
  identifier: null
};

const httpStatusReducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case HTTP_ACTIONS.SEND:
      return { isLoading: true, error: null, data: null, requestOption: null, identifier: payload.identifier };

    case HTTP_ACTIONS.RESPONSE:
      const { responseData, requestOption } = payload;
      
      return { ...state, isLoading: false, data: responseData, requestOption: requestOption };

    case HTTP_ACTIONS.ERROR:
      return { isLoading: false, error: payload.error, data: null };

    case HTTP_ACTIONS.CLEAR:
      return initialState;
  
    default:
      return state;
  }
};

const useHttp = () => {
  const [ httpStatus, dispatchHttpStatus ] = useReducer(httpStatusReducer, initialState);

  const sendRequest = useCallback(async (url, method, body, requestOption, identifier) => {
    let responseData = null;

    try {
      dispatchHttpStatus({ type: HTTP_ACTIONS.SEND, payload: { identifier } });
      const response = await fetch(url, {
        method,
        body,
        headers: {
          'Content-Type': 'application/json'
        }
      });

      if (response.ok && response.status === 200) {
        // Logic for successfull response here
        responseData = await response.json();
        dispatchHttpStatus({ type: HTTP_ACTIONS.RESPONSE, payload: { responseData, requestOption } });
      } else {
        throw new Error('Something went wrong.');
      }
    } catch (error) {
      dispatchHttpStatus({
        type: HTTP_ACTIONS.ERROR,
        payload: { error: error.message }
      });
    } finally {
      dispatchHttpStatus({ type: HTTP_ACTIONS.RESPONSE, payload: { responseData } });
    }
  }, []);

  const clear = useCallback(() => {
    dispatchHttpStatus({ type: HTTP_ACTIONS.CLEAR });
  }, []);
  
  return [httpStatus.isLoading, httpStatus.error, httpStatus.data, sendRequest, httpStatus.requestOption, httpStatus.identifier, clear];
};

export default useHttp;
