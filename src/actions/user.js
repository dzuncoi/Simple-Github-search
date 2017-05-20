/*
* @author: dzuncoi
* @date: May 20, 2017
* @version: 0.0.1
*/

import { searchUser, fetchUserRepos, fetchUserInfo } from '../api/user';

export const SEARCH_USER_REQUEST = 'SEARCH_USER_REQUEST';
export const SEARCH_USER_SUCCESS = 'SEARCH_USER_SUCCESS';
export const SEARCH_USER_FAILURE = 'SEARCH_USER_FAILURE';

export const SELECT_USER = 'SELECT_USER';

export const FETCH_USERINFO_REQUEST = 'FETCH_USERINFO_REQUEST';
export const FETCH_USERINFO_SUCCESS = 'FETCH_USERINFO_SUCCESS';
export const FETCH_USERINFO_FAILURE = 'FETCH_USERINFO_FAILURE';

export const FETCH_REPOS_REQUEST = 'FETCH_REPOS_REQUEST';
export const FETCH_REPOS_SUCCESS = 'FETCH_REPOS_SUCCESS';
export const FETCH_REPOS_FAILURE = 'FETCH_REPOS_FAILURE';

export function searchUsersbyName(username) {
  return (dispatch, getState) => {
    dispatch({type: SEARCH_USER_REQUEST});
    searchUser(username)
    .then(response => {
      dispatch({
        type: SEARCH_USER_SUCCESS,
        payload: response
      })
    })
    .catch(err => {
      dispatch({
        type: SEARCH_USER_FAILURE,
        payload: err
      })
    })
  }
}

export function selectUser(user) {
  return {
    type: SELECT_USER,
    payload: user
  }
}

export function fetchUserInfoByName(username) {
  return (dispatch, getState) => {
    dispatch({type: FETCH_USERINFO_REQUEST});
    fetchUserInfo(username)
    .then(response => {
      dispatch({
        type: FETCH_USERINFO_SUCCESS,
        payload: response
      })
    })
    .catch(err => {
      dispatch({
        type: FETCH_USERINFO_FAILURE,
        payload: err
      })
    })
  }
}

export function fetchRepos(options) {
  return (dispatch, getState) => {
    dispatch({type: FETCH_REPOS_REQUEST});
    fetchUserRepos(options)
    .then(response => {
      dispatch({
        type: FETCH_REPOS_SUCCESS,
        payload: response
      })
    })
    .catch(err => {
      dispatch({
        type: FETCH_REPOS_FAILURE,
        payload: err
      })
    })
  }
}
