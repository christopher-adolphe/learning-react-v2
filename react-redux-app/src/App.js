import React, { Fragment } from 'react';
import { useSelector } from 'react-redux';

// import Counter from './components/Counter';
// import CounterV2 from './components/CounterV2';
import { Auth, Header, UserProfile } from './components';

function App() {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  return (
    <Fragment>
      {/* <Counter />
      <br />
      <CounterV2 /> */}

      <Header />

      {
        isAuthenticated ? <UserProfile /> : <Auth />
      }
    </Fragment>
  );
}

export default App;
