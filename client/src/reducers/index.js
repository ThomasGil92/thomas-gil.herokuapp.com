import { combineReducers } from 'redux';
import sites from './sitesReducer';
import accept from './acceptReducer';

export default combineReducers({
  sites: sites,
  accept:accept
});