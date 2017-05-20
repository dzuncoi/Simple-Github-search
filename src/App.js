/*
* @author: dzuncoi
* @date: May 19 2015
* @version: 0.0.1
*/

import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';
import {
  SearchBox
} from 'office-ui-fabric-react/lib/SearchBox';
import SearchItem from './components/SearchItem';
import Header from './components/Header';
import { searchUsersbyName, selectUser } from './actions/user';
import { browserHistory } from 'react-router';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchText: '',
      users: [],
      isSearching: false
    }
    this.onSearchBoxChanged = this.onSearchBoxChanged.bind(this);
    this.onSelectUser = this.onSelectUser.bind(this);
    this.onSearchUser = this.onSearchUser.bind(this);
  }

  componentWillMount() {

  }

  componentDidMount() {

  }

  componentWillReceiveProps(nextProps) {

  }

  onSearchUser(username) {
    this.props.dispatch(searchUsersbyName(username));
  }

  onSearchBoxChanged(value) {
    this.setState({
      searchText: value
    });
    // Execute search after user stop typing for 0.5 sec
    setTimeout(() => {
      if (value && value === this.state.searchText) {
        this.onSearchUser(this.state.searchText);
      }
    }, 500)
  }

  onSelectUser(user) {
    this.props.dispatch(selectUser(user));
    browserHistory.push(`/${user.login}`)
  }

  render() {
    const { list, isSearching } = this.props.searchedUser;
    return (
      <div className="App">
        <Header title="GITHUB USER SEARCH"/>
        <div className="search-container">
          <div className="search-wrapper">
            <SearchBox
              labelText="Search by username ..."
              value={this.state.searchText}
              onChange={this.onSearchBoxChanged}
              />
            { isSearching &&
              <img src="https://cdn.zenquiz.net/static/Assets/loading-animation.gif" alt="Loading gif"/>
            }
            { list && list.length > 0 &&
              <div className="search-items">
                {
                  list.map(user => (
                    <SearchItem
                      key={Math.random()}
                      user={user}
                      onSelect={() => this.onSelectUser(user)}/>
                  ))
                }
              </div>
            }
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    searchedUser: state.searchedUser
  }
}

export default connect(mapStateToProps)(App);
