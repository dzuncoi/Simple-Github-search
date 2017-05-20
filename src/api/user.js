/*
* @author: dzuncoi
* @date: May 20, 2017
* @version: 0.0.1
*/

import request from 'superagent';

export function searchUser(username) {
  return new Promise((resolve, reject) => {
    request
    .get(`https://api.github.com/search/users?q=${username}`)
    .then(response => resolve(response.body))
    .catch(err => reject(err))
  })
}
