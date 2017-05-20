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
} from '../actions/user';

export function selectedUser(state = null, action) {
  switch(action.type) {
    case SELECT_USER: return {
      ...action.payload,
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
