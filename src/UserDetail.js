/*
* @author: dzuncoi
* @date: May 20 2015
* @version: 0.0.1
*/

import React, { Component } from 'react';
import Header from './components/Header';

class UserDetail extends Component {
  render() {
    const { username } = this.props.params;
    console.log(this.props);
    return (
      <div>
        <div className="text-center">
          <Header title={`USER: ${username.toUpperCase()}`}/>
        </div>
      </div>
    )
  }
}

export default UserDetail
