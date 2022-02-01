import { useState, useCallback } from 'react';

const useHttp = () => {
  const [ isLoading, setIsLoading ] = useState(false);
  const [ error, setError ] = useState(null);

  const sendRequest = useCallback(async (requestConfig, onHandleResponseData) => {
    const { url, method, headers, body } = requestConfig;

    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch(url, {
        method: method || 'GET',
        headers: headers || {},
        body: body ? JSON.stringify(body) : null
      });

      if (!response.ok) {
        throw new Error('Something went wrong');
      }

      const data = await response.json();

      onHandleResponseData(data);
    } catch (error) {
      setError(error.message || 'Something went wrong');
    } finally {
      setIsLoading(false);
    }
  }, []);

  return { isLoading, error, sendRequest };
};

export default useHttp;
