import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import './index.css';
import App from './App';

ReactDOM.render(
  /*
    Using the `<BrowserRouter>` component from `react-router-dom` to
    wrap the route `<App />` component in order to activate and unloack
    the react-route features like defining routes
  */
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);
