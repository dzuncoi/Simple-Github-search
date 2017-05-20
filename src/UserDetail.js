/*
* @author: dzuncoi
* @date: May 20 2015
* @version: 0.0.1
*/

import React, { Component } from 'react';
import { connect } from 'react-redux';
import Header from './components/Header';
import Repo from './components/Repo';
import { fetchRepos, fetchUserInfoByName } from './actions/user'

import './UserDetail.css';

class UserDetail extends Component {

  /*
  * There wil be 2 cases for this component:
  * (1) User navigate from "/" -> "/:username": fetchRepo only
  * (2) User navigate directly to "/:username" by entering url: fetchUserInfo + fetchRepo (async)
  */

  componentWillMount() {
    const user = this.props.selectedUser;
    const { username } = this.props.params;
    if (!user) {
      return this.props.dispatch(fetchUserInfoByName(username));
    }
    // Fetch user's repo for the 1st case
    if (!user.repos || user.repos.length <= 0) {
      this.props.dispatch(fetchRepos({
        username
      }));
    }
  }

  componentDidMount() {

  }

  componentWillReceiveProps(nextProps) {
    // Fetch user's repo for the 2nd case
    const { username } = this.props.params;
    if (!this.props.selectedUser && nextProps.selectedUser) {
      this.props.dispatch(fetchRepos({
        username
      }))
    }
  }

  render() {
    const { username } = this.props.params;
    const user = this.props.selectedUser;
    if (!user) return null;
    return (
      <div>
        <div className="text-center">
          <Header title={`USER: ${username.toUpperCase()}`}/>
        </div>
        <div className="ms-Grid detail-container">
          <div className="ms-Grid-row">
            <div className="ms-Grid-col ms-u-sm3 text-center user-info">
              <img src={user.avatar_url} alt="User's Avatar"/>
              <p className="ms-font-xxl ms-fontWeight-semibold">{user.login}</p>
              <a href={user.url} target="_blank">
                <p className="ms-font-m-plus">View on Github</p>
              </a>
              <p className="ms-font-m-plus">Type: {user.type}</p>
              <p className="ms-font-m-plus">Score: {user.score}</p>
            </div>
            <div className="ms-Grid-col ms-u-sm9">
              <div className="ms-font-xl">Repositories</div>
              <div className="repo-wrapper">
                { user.isFetchingRepo &&
                  <img src="https://cdn.zenquiz.net/static/Assets/loading-animation.gif" alt="Loading gif"/>
                }
                { user.isFetchingRepoCompleted && user.repos.length <= 0 &&
                  <div className="ms-font-l">This user doesn't have any repos.</div>
                }
                {
                  user.repos && user.repos.map(repo => (
                    <Repo
                      repo={repo}
                      key={repo.id}/>
                  ))
                }
              </div>
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
