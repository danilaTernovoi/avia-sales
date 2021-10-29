import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import App from './App';
import InitialBoundary from './boundaries';
import store from './store';
import './sass/index.scss';
import 'normalize.css/normalize.css';

render(
  <InitialBoundary>
    <Provider store={store}>
      <App />
    </Provider>
  </InitialBoundary>,
  document.getElementById('root'),
);
