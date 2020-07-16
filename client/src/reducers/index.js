import { combineReducers } from 'redux';
import sites from './sitesReducer';
import accept from './acceptReducer';
import user from './userReducer';

export default combineReducers({
  sites: sites,
  accept:accept,
  user:user
});