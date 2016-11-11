import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link, browserHistory } from 'react-router';

import Admin from './Admin/Admin';
import Submit from './Submit/Submit';
import User from './User/User';

const App = React.createClass({
  render: function(){
    return (
      <div>
        <Link to="user">User</Link>
        <Link to="admin">Admin</Link>
        <Link to="submit">Submit</Link>
      </div>
    )
  }
});

ReactDOM.render((
  <Router history={browserHistory}>
    <Route path="/" component={User}/>
    <Route path="user" component={User}/>
    <Route path="admin" component={Admin}/>
    <Route path="submit" component={Submit}/>
  </Router>
), document.getElementById('app'))
