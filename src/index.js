import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom';
import allReducers from './reducers/index.js';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

const store = createStore(allReducers);

ReactDOM.render(
  <Provider store={store} >
    <App />
  </Provider>, document.getElementById('root')
);

registerServiceWorker();
