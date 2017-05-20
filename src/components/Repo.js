/*
* @author: dzuncoi
* @date: May 20 2015
* @version: 0.0.1
*/

import React from 'react';
import PropTypes from 'prop-types';

import './Repo.css';

const Repo = props => {
  const { repo } = props;
  return (
    <div className="repo-container">
      <p className="ms-font-l ms-fontWeight-semibold"><a href={repo.html_url}>{repo.name}</a></p>
      {
        repo.fork && (
          <p className="ms-font-m-plus">
            Forked from
            <a href={repo.homepage}>{` ${repo.homepage}`}</a>
          </p>
        )
      }
      <p className="ms-font-m-plus">{repo.description}</p>
      <p className="ms-font-m-plus">Language: {repo.language}</p>
    </div>
  )
}

Repo.PropTypes = {
  repo: PropTypes.object.isRequired,
}

export default Repo
