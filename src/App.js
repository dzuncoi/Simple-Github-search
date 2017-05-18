/*
* @author: dzuncoi
* @date: May 19 2015
* @version: 0.0.1
*/

import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {
  SearchBox
} from 'office-ui-fabric-react/lib/SearchBox';
import SearchItem from './components/SearchItem';

const users = [{
  avatar_url: "https://avatars0.githubusercontent.com/u/59207?v=3",
  login: "tomster"
}, {
  avatar_url: "https://avatars3.githubusercontent.com/u/2454540?v=3",
  login: "TomBZombie"
},{
  avatar_url: "https://avatars0.githubusercontent.com/u/59207?v=3",
  login: "tomster"
}, {
  avatar_url: "https://avatars3.githubusercontent.com/u/2454540?v=3",
  login: "TomBZombie"
},{
  avatar_url: "https://avatars0.githubusercontent.com/u/59207?v=3",
  login: "tomster"
}, {
  avatar_url: "https://avatars3.githubusercontent.com/u/2454540?v=3",
  login: "TomBZombie"
}, {
  avatar_url: "https://avatars3.githubusercontent.com/u/2454540?v=3",
  login: "TomBZombie"
},{
  avatar_url: "https://avatars0.githubusercontent.com/u/59207?v=3",
  login: "tomster"
}, {
  avatar_url: "https://avatars3.githubusercontent.com/u/2454540?v=3",
  login: "TomBZombie"
}]

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchText: ''
    }
    this.onSearchBoxChanged = this.onSearchBoxChanged.bind(this);
    this.onSelectUser = this.onSelectUser.bind(this);
  }

  componentWillMount() {

  }

  componentDidMount() {

  }

  componentWillReceiveProps(nextProps) {

  }

  onSearchBoxChanged(value) {
    this.setState({
      searchText: value
    });
  }

  onSelectUser(user) {
    console.log(user);
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p className="ms-font-xxl ms-fontWeight-regular">GITHUB USER SEARCH</p>
        </div>
        <div className="search-container">
          <div className="search-wrapper">
            <SearchBox
              labelText="Search by username ..."
              value={this.state.searchText}
              onChange={this.onSearchBoxChanged}
              />
            <div className="search-items">
              {
                users.map(user => (
                  <SearchItem
                    key={Math.random()}
                    user={user}
                    onSelect={() => this.onSelectUser(user)}/>
                ))
              }
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
