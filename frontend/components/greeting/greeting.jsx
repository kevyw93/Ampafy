import React from "react";
import { Link } from 'react-router-dom';

const Greeting = (props) => {
  debugger

  if (props.currentUser) {
    return (
    <div>
      <h1>
        Hi welcome {props.currentUser.username}
      </h1>
      <button onClick={props.logout}>Logout</button>
    </div>);
  }else {
    return (
      <div>
        <Link to="/signup">Sign Up</Link>
      <Link to="/login">Log In</Link>
      </div>
    );
  }
};


export default Greeting;
