import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import UserDetail from './UserDetail';
import './index.css';
import { Router, Route, browserHistory } from 'react-router'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import reducers from './reducers'

const store = createStore(
  reducers,
  // This one is used for Redux DevTools extension
  // You can find it out at https://github.com/zalmoxisus/redux-devtools-extension
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(thunk),
)

ReactDOM.render((
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={App} />
      <Route path="/:username" component={UserDetail}/>
    </Router>
  </Provider>
), document.getElementById('root'))
