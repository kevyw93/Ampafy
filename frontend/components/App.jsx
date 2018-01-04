import React from 'react';
import SessionFormContainer from './session/session_form_container';
import LandingContainer from "./landing/landing_container";
import { AuthRoute, ProtectedRoute } from "../util/route_util";
import {Switch, Route} from 'react-router-dom';
import LoggedInContainer from './landing/logged_in_container';

const App = () => {
  return (
    <div>
      <Switch>
        <ProtectedRoute path='/browse' component={LoggedInContainer} />
        <Route exact path="/" component={LandingContainer} />
        <AuthRoute path='/login' component={SessionFormContainer} />
        <AuthRoute path='/signup' component={SessionFormContainer} />
      </Switch>
    </div>
  );
};

export default App;
