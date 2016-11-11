import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link, browserHistory } from 'react-router';

import Admin from './Admin/Admin';
import Submit from './Submit/Submit';
import User from './User/User';

/* eslint-disable */
class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div>
        <Link to="user">User</Link>
        <Link to="admin">Admin</Link>
        <Link to="submit">Submit</Link>
      </div>
    );
  }
}

ReactDOM.render((
  <Router history={browserHistory}>
    <Route path="/" component={User} />
    <Route path="user" component={User} />
    <Route path="admin" component={Admin} />
    <Route path="submit" component={Submit} />
  </Router>
), document.getElementById('app'))
/* eslint-enable */
