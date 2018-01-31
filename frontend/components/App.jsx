import React from 'react';
import SessionFormContainer from './session/session_form_container';
import SessionSignupContainer from './session/session_signup_container';
import LandingContainer from "./landing/landing_container";
import { AuthRoute, ProtectedRoute } from "../util/route_util";
import {Switch, Route} from 'react-router-dom';
import LoggedInContainer from './logged_in/logged_in_container';
// import SongIndex from './album/song_index';

const App = () => {
  return (
    <div className="main-main-page">

      <Switch>
        <ProtectedRoute path='/' component={LoggedInContainer} />
        <AuthRoute path='/login' component={SessionFormContainer} />
        <AuthRoute path='/signup' component={SessionSignupContainer} />
        <Route exact path="/" component={LandingContainer} />

      </Switch>
    </div>
  );
};

export default App;
