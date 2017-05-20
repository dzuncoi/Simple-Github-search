/*
* @author: dzuncoi
* @date: May 19 2015
* @version: 0.0.1
*/

import React from 'react';
import PropTypes from 'prop-types';
import './SearchItem.css';

const SearchItem = props => {
  const { user, onSelect } = props;
  return (
    <div onClick={onSelect} className="search-item">
      <img src={user.avatar_url} alt="User's Avatar"/>
      <p className="ms-font-l ms-fontWeight-regular">{user.login}</p>
    </div>
  )
}

SearchItem.propTypes = {
  user: PropTypes.object.isRequired,
  onSelect: PropTypes.func
}

export default SearchItem
