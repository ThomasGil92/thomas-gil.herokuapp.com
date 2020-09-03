import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger'
import { Provider,useSelector } from 'react-redux';
import rootReducer from './reducers';
import { composeWithDevTools } from 'redux-devtools-extension';
import { getSites,setUser,setLang } from './actions'; 
const invariant=require('redux-immutable-state-invariant').default()

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk, logger,invariant)));
store.dispatch(getSites()); 
store.dispatch(setUser()); 
if(sessionStorage.getItem('lang')){
  store.dispatch(setLang(sessionStorage.getItem('lang').value))
}


ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

