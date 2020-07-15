import {API} from '../config'
import { get } from 'axios';

export const GET_SITES = 'GET_SITES';
export const SET_ACCEPTANCE = 'SET_ACCEPTANCE';


export function getSites() {
    return function(dispatch) {
      return get(`${API}/siteList`)
        .then(function(response) {
          dispatch({type: GET_SITES, sites: response.data})
        })
        .catch(function(error) { console.log('error', error); });
    };
  };

export function setAccept() {
    return function(dispatch) {
      
          dispatch({type: SET_ACCEPTANCE, accept:true})
    };
  };