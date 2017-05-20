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

export function fetchUserInfo(username) {
  return new Promise((resolve, reject) => {
    request
    .get(`https://api.github.com/users/${username}`)
    .then(response => resolve(response.body))
    .catch(err => reject(err))
  })
}

export function fetchUserRepos(options) {
  return new Promise((resolve, reject) => {
    if (!options || (!options.username && !options.url)) return reject('INVALID PARAMS');

    let _url;
    if (options.username) _url = `https://api.github.com/users/${options.username}/repos`;
    else if (options.url) _url = options.url;
    else _url = 'https://api.github.com/users/dzuncoi/repos'; //Default - should not happen this case

    request
    .get(_url)
    .then(response => resolve(response.body))
    .catch(err => reject(err))
  })
}
