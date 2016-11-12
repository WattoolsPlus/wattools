import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory } from 'react-router';

import Admin from './Admin/Admin';
import Submit from './Submit/Submit';
import User from './User/User';

/* eslint-disable */
ReactDOM.render((
  <Router history={browserHistory}>
    <Route path="/" component={User} />
    <Route path="admin" component={Admin} />
    <Route path="submit" component={Submit} />
  </Router>
), document.getElementById('app'))
/* eslint-enable */

