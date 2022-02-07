import React, { Fragment } from 'react';

import Counter from './components/Counter';
import CounterV2 from './components/CounterV2';

function App() {
  return (
    <Fragment>
      <Counter />
      <br />
      <CounterV2 />
    </Fragment>
  );
}

export default App;
