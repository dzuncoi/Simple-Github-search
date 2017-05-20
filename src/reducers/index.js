import { combineReducers } from 'redux';
import { selectedUser, searchedUser } from './user';

const reducers = combineReducers({
  selectedUser,
  searchedUser,
})

export default reducers
