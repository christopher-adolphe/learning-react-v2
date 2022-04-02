import React, { useState } from 'react';
import Output from './Output';

function Greeting(props) {
  const [ isChanged, setIsChanged ] = useState(false);

  const changeTextHandler = () => {
    setIsChanged((prevState) => !prevState);
  };

  return (
    <div>
      <h2>Hello world</h2>

      {
        isChanged
          ? (<Output>What's up bro!</Output>)
          : (<Output>It's good to see you!</Output>)
      }

      <button type="button" onClick={ changeTextHandler }>Change Greeting</button>
    </div>
  );
}

export default Greeting;
