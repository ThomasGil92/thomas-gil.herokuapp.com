import { API } from '../config'
import { get } from 'axios';


export const GET_SITES = 'GET_SITES';
export const SET_ACCEPTANCE = 'SET_ACCEPTANCE';
export const SET_USER = 'SET_USER';


export function getSites() {
  return function (dispatch) {
    return get(`${API}/siteList`)
      .then(function (response) {
        dispatch({ type: GET_SITES, sites: response.data })
      })
      .catch(function (error) { console.log('error', error); });
  };
};

export function setAccept() {
  return function (dispatch) {

    dispatch({ type: SET_ACCEPTANCE, accept: true })
  };
};
export const getUser = (user,history) => {

  return fetch(`${API}/signin`, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(user)
  })
    .then(response => {
      return response.json();
    })
    .then(data => {
      if (!data.error) {
        localStorage.setItem('jwt', JSON.stringify(data));
      }
    })
    .catch(err => {
      console.log(err);
    });
}

export function setUser() {
  return function (dispatch) {
    if (localStorage.getItem("jwt")) {
      dispatch({ type: SET_USER, user:JSON.parse(localStorage.getItem("jwt")) })
    }
  };
}