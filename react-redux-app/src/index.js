import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import './index.css';

import { store } from './store';

import App from './App';

// Using the `<Provider></Provider>` component of react-redux
// to wrap the root `<App />` of the react application so that
// the store is available to the other components in tree
// The `<Provider></Provider>` component takes a `store`
// prop to which we pass the redux store we have created
ReactDOM.render(
  <Provider store={ store }>
    <App />
  </Provider>
  , document.getElementById('root')
);
