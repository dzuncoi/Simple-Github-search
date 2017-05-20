/*
* @author: dzuncoi
* @date: May 20 2015
* @version: 0.0.1
*/

import React, { Component } from 'react';
import { connect } from 'react-redux';
import Header from './components/Header';
import Repo from './components/Repo';

import './UserDetail.css';

class UserDetail extends Component {
  render() {
    const { username } = this.props.params;
    const user = this.props.selectedUser;
    return (
      <div>
        <div className="text-center">
          <Header title={`USER: ${username.toUpperCase()}`}/>
        </div>
        <div className="ms-Grid detail-container">
          <div className="ms-Grid-row">
            <div className="ms-Grid-col ms-u-sm4 text-center user-info">
              <img src={user.avatar_url} alt="User's Avatar"/>
              <p className="ms-font-xxl ms-fontWeight-semibold">{user.login}</p>
              <a href={user.url} target="_blank">
                <p className="ms-font-m-plus">View on Github</p>
              </a>
              <p className="ms-font-m-plus">Type: {user.type}</p>
              <p className="ms-font-m-plus">Score: {user.score}</p>
            </div>
            <div className="ms-Grid-col ms-u-sm8">
              <div className="ms-font-xl">Repositories</div>
              <Repo repo={{
                  name: "My Repo",
                  html_url: "google.com",
                  fork: true,
                  homepage: "24h.com.vn",
                  description: "This is a description",
                  language: "Js"
                }}/>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    selectedUser: state.selectedUser
  }
}

export default connect(mapStateToProps)(UserDetail)
