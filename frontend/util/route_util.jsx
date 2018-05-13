import React from 'react';
import {connect} from 'react-redux';
import { withRouter, Route, Redirect } from 'react-router-dom';

const Auth = ({component: Component, path, loggedIn}) => {
  return (
  <Route path={path} render={(props) => (
    !loggedIn ? (
      <Component {...props} />
    ) : (
      <Redirect to="/browse/albums" />
    )
  )}/>
  );
};

const mapStateToProps = state => {
  return {loggedIn: Boolean(state.entities.session.currentUser)};
};

const Protect = ({component: Component, path, loggedIn}) => {
  return (
  <Route path={path} render={(props) => (
    loggedIn ? (
      <Component {...props} />
    ) : (
      <Redirect to="/" />
    )
  )}/>
  );
};


export const AuthRoute = withRouter(connect(mapStateToProps, null)(Auth));
export const ProtectedRoute = withRouter(connect(mapStateToProps, null)(Protect));
