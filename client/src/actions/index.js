import { API } from '../config'
import { get } from 'axios';


export const GET_SITES = 'GET_SITES';
export const GET_SITE = 'GET_SITE';
export const SET_ACCEPTANCE = 'SET_ACCEPTANCE';
export const SET_USER = 'SET_USER';
export const NEW_PUBLIC_SITE = 'NEW_PUBLIC_SITE';
export const SET_NEW_SITE = 'SET_NEW_SITE';


export function getSites() {
  return function (dispatch) {
    return get(`${API}/siteList`)
      .then(function (response) {
        dispatch({ type: GET_SITES, sites: response.data })
      })
      .catch(function (error) { console.log('error', error); });
  };
};
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
export const editSite = (userId, token, site,siteId) => {
  return fetch(`${API}/site/${siteId}/${userId}`, {
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

export function setNewSite(data) {
  return function (dispatch) {
      dispatch({ type: SET_NEW_SITE, newSite:data })
  };
}