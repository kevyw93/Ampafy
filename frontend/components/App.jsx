import React from 'react';
import SessionFormContainer from './session/session_form_container';
import GreetingContainer from "./greeting/greeting_container";
import { AuthRoute } from "../util/route_util";

const App = () => {
  return (
    <div>
      <header>
      <h1>Bench BnB</h1>
      <GreetingContainer />
    </header>

    <AuthRoute path='/login' component={SessionFormContainer} />
    <AuthRoute path='/signup' component={SessionFormContainer} />
    </div>
  );
};

export default App;
