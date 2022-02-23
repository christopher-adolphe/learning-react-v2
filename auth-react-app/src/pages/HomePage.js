import { useContext, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import AppContext from '../context/AppContext';

import StartingPageContent from '../components/StartingPage/StartingPageContent';

const HomePage = () => {
  const { token } = useContext(AppContext);
  const history = useHistory();

  useEffect(() => {
    if (!token) {
      history.replace('/auth');
    }
  }, [token, history]);
  return <StartingPageContent />;
};

export default HomePage;
