/*
* @author: dzuncoi
* @date: May 20, 2017
* @version: 0.0.1
*/

import {
  SEARCH_USER_REQUEST,
  SEARCH_USER_SUCCESS,
  SEARCH_USER_FAILURE,
  SELECT_USER,
  FETCH_USERINFO_REQUEST,
  FETCH_USERINFO_SUCCESS,
  FETCH_USERINFO_FAILURE,
  FETCH_REPOS_REQUEST,
  FETCH_REPOS_SUCCESS,
  FETCH_REPOS_FAILURE,
} from '../actions/user';

export function selectedUser(state = null, action) {
  switch(action.type) {
    case SELECT_USER:
      return {
        ...action.payload,
      }
    case FETCH_USERINFO_REQUEST:
      return {
        ...state,
        isFetchingUserInfo: true,
        isFetchingUserInfoCompleted: false
      }
    case FETCH_USERINFO_SUCCESS:
      return {
        ...state,
        ...action.payload,
        isFetchingUserInfo: false,
        isFetchingUserInfoCompleted: true
      }
    case FETCH_USERINFO_FAILURE:
      return {
        ...state,
        isFetchingUserInfo: false,
        isFetchingUserInfoCompleted: true
      }
    case FETCH_REPOS_REQUEST:
      return {
        ...state,
        isFetchingRepo: true,
        isFetchingRepoCompleted: false
      }
    case FETCH_REPOS_SUCCESS:
      return {
        ...state,
        repos: action.payload,
        isFetchingRepo: false,
        isFetchingRepoCompleted: true
      }
    case FETCH_REPOS_FAILURE:
      return {
        ...state,
        isFetchingRepo: false,
        isFetchingRepoCompleted: true
      }
    default: return state;
  }
}

export function searchedUser(state = {
  list: [],
  isSearching: false,
  isSearchCompleted: false
}, action) {
  const { type, payload } = action;
  switch (type) {
    case SEARCH_USER_REQUEST:
      return {
        ...state,
        isSearching: true,
        isSearchCompleted: false
      }
    case SEARCH_USER_SUCCESS:
      return {
        ...state,
        list: [...payload.items],
        isSearching: false,
        isSearchCompleted: true
      }
    case SEARCH_USER_FAILURE:
      return {
        ...state,
        list: [],
        isSearching: false,
        isSearchCompleted: true
      }
    default: return state;
  }
}
