/*
* @author: dzuncoi
* @date: May 20 2015
* @version: 0.0.1
*/

import React from 'react';
import PropTypes from 'prop-types';

import logo from '../logo.svg';
import './Header.css';

const Header = props => {
  return (
    <div className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <p className="ms-font-xxl ms-fontWeight-regular">{props.title}</p>
    </div>
  )
}

Header.propTypes = {
  title: PropTypes.string.isRequired,
}

export default Header
