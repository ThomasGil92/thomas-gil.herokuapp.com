import { API } from '../config'
import { get } from 'axios';
import Cookie from 'js-cookie'
import { useHistory } from 'react-router-dom'



export const SET_ALERT = 'SET_ALERT';
export const REMOVE_ALERT = 'REMOVE_ALERT';
export const GET_SITES = 'GET_SITES';
export const GET_SITE = 'GET_SITE';
export const SET_ACCEPTANCE = 'SET_ACCEPTANCE';
export const SET_USER = 'SET_USER';
export const NEW_PUBLIC_SITE = 'NEW_PUBLIC_SITE';
export const SET_NEW_SITE = 'SET_NEW_SITE';
export const CLEAR_TO_UPDATE_SITE = 'CLEAR_TO_UPDATE_SITE';


export function getSites() {
  return function (dispatch) {
    return get(`${API}/siteList`)
      .then(function (response) {
        dispatch({ type: GET_SITES, sites: response.data })
      })
      .catch(function (error) { console.log('error', error); });
  };
};
export function setAlert(msg, alertType, timeout = 5000) {
  return function (dispatch) {

    dispatch({
      type: SET_ALERT,
      payload: { msg, alertType }
    })
    setTimeout(() => dispatch({ type: REMOVE_ALERT }), timeout)
  }
}
export function getSite(siteId) {
  return function (dispatch) {
    return get(`${API}/site/${siteId}`)
      .then(function (response) {
        dispatch({ type: GET_SITE, siteToUpdate: response.data })
      })
      .catch(function (error) { console.log('error', error); });
  };
};

export function setAccept() {
  return function (dispatch) {

    dispatch({ type: SET_ACCEPTANCE, accept: true })
  };
};
export const getUser = (user) => {

  return fetch(`${API}/signin`, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(user)
  })
    .then(response => {

    })
    .then(data => {
      return data.json();


    })
    .catch(err => {
      console.log(err);
    });
}

export const authenticate = (data,next) => {
  if (!data.error) {
    localStorage.setItem('jwt', JSON.stringify(data));
    next()
  }
  if(data.err){
    console.log(data.err)
  }
}

export function setUser() {
  return function (dispatch) {
    if (localStorage.getItem("jwt")) {
      dispatch({ type: SET_USER, user: JSON.parse(localStorage.getItem("jwt")) })
    }
  };
}

export const postSite = (userId, token, site) => {
  return fetch(`${API}/siteAdd/${userId}`, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      Authorization: `Bearer ${token}`
    },
    body: site
  })
    .then(response => {
      return response.json();
    })
    .catch(err => {
      console.log(err);
    });
}
export const editSite = (userId, token, site, siteId) => {
  return fetch(`${API}/site/${siteId}/${userId}`, {
    method: 'PUT',
    headers: {
      Accept: 'application/json',
      Authorization: `Bearer ${token}`
    },
    body: JSON.stringify(site)
  })
    .then(response => {
      return response.json();
    })
    .catch(err => {
      console.log(err);
    });
}
export const deleteSite = (siteId, userId, token) => {
  return fetch(`${API}/site/${siteId}/${userId}`, {
    method: 'DELETE',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`
    }
  })
    .then(response => {
      return response.json()
    })
    .catch(err => console.log(err));
};

export function setNewSite(data) {
  return function (dispatch) {
    dispatch({ type: SET_NEW_SITE, newSite: data })
  };
}
export function clearToUpdateSite(data) {
  return function (dispatch) {
    dispatch({ type: CLEAR_TO_UPDATE_SITE, siteToUpdate: '' })
  };
}