import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from './store/actions/auth';

import Layout from './hoc/Layout/Layout';
import Login from './containers/Login/Login';
import Signup from './containers/Signup/Signup';
import Dashboard from './containers/Dashboard/Dashboard';
import Books from './containers/Books/Books';

class App extends Component {

  componentDidMount() {
    this.props.onTryAutoSignup();
  }

  render() {
    let routes = (
      <Switch>
        <Route exact path="/" component={Login} />
        <Route path="/signup" component={Signup} />
      </Switch>
    );
    if (this.props.isAuthenticated)
      routes = (
        <Switch>
          <Route path="/books" component={Books} />
          <Route exact path="/" component={Dashboard} />
        </Switch>
      );

    return (
      <div>
        <Layout>{routes}</Layout>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    isAuthenticated: state.token !== null
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onTryAutoSignup: () => dispatch(actions.authCheckState())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
