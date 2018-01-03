import React from "react";
import { Link } from 'react-router-dom';

const Landing = (props) => {

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
      <div className="button-container">
        <Link className="landing-signup" to="/signup">Sign Up</Link>
        <h1 className="loggedin">Already have an Account</h1>
        <Link className="landing-login" to="/login">Log In</Link>
      </div>
    );
  }
};


export default Landing;
