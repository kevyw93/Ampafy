import React from 'react';
import SessionFormContainer from './session/session_form_container';
import GreetingContainer from "./greeting/greeting_container";
import { AuthRoute } from "../util/route_util";
import {Switch, Route} from 'react-router-dom';


const App = () => {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={GreetingContainer} />
        <AuthRoute path='/login' component={SessionFormContainer} />
        <AuthRoute path='/signup' component={SessionFormContainer} />
      </Switch>
    </div>
  );
};

export default App;
