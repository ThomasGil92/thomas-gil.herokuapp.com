import { combineReducers } from 'redux';
import sites from './sitesReducer';
import accept from './acceptReducer';
import user from './userReducer';
import newSite from './newSiteReducer';
import siteToUpdate from './siteReducer';
import alert from './alertReducer';
import language from './languageReducer';

export default combineReducers({
  sites: sites,
  accept:accept,
  user:user,
  newSite:newSite,
  siteToUpdate:siteToUpdate,
  alert
  
});