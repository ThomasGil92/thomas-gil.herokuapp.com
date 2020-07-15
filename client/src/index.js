import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger'
import { Provider } from 'react-redux';
import rootReducer from './reducers';
import { composeWithDevTools } from 'redux-devtools-extension';
import { getSites } from './actions'; 

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk, logger)));
store.dispatch(getSites()); 

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

