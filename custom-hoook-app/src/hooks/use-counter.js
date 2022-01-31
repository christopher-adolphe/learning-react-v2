import { useState, useEffect } from 'react';

const useCounter = (doIncrement = true) => {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCounter((prevCounter) => doIncrement ? prevCounter + 1 : prevCounter - 1);
    }, 1000);

    return () => clearInterval(interval);
  }, [doIncrement]);

  return counter;
};

export default useCounter;
