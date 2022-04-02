import React, { useState } from 'react';

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
          ? (<p>What's up bro!</p>)
          : (<p>It's good to see you!</p>)
      }

      <button type="button" onClick={ changeTextHandler }>Change Greeting</button>
    </div>
  );
}

export default Greeting;
