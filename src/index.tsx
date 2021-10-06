import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import 'normalize.css/normalize.css';
import './sass/index.scss';

const root = document.getElementById('root');

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  root
);
