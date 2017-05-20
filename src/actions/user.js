/*
* @author: dzuncoi
* @date: May 20, 2017
* @version: 0.0.1
*/

import { searchUser } from '../api/user';

export const SEARCH_USER_REQUEST = 'SEARCH_USER_REQUEST';
export const SEARCH_USER_SUCCESS = 'SEARCH_USER_SUCCESS';
export const SEARCH_USER_FAILURE = 'SEARCH_USER_FAILURE';

export const SELECT_USER = 'SELECT_USER';

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
