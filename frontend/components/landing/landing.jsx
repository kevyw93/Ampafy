import React from "react";
import { Link } from 'react-router-dom';
import LoggedIn from './logged_in';

const Landing = (props) => {

  if (props.currentUser) {
    return (
    <div>
      <LoggedIn props={props} />
      <button onClick={props.logout}>Logout</button>
    </div>
  );
  }else {
    return (
      <div className="landing">
        <div className="wrapper-opacity">

          <div className="button-container">
            <h1 className="logo"><img></img>Sandrafy</h1>
            <Link className="landing-signup" to="/signup">Sign Up</Link>
            <h1 className="loggedin">Already have an Account</h1>
            <Link className="landing-login" to="/login">Log In</Link>
          </div>

          <div className="right-border">
          </div>

          <div className="side-container">
            <h1>Get Sandrafied with the right music.</h1>
            <h2>Best Songs Out There Especially to KTV</h2>
            <h3><img></img>Search and discover how to be sandrafy</h3>
            <h3><img></img>Create playlist of your favorite music</h3>
          </div>

        </div>
      </div>
    );
  }
};


export default Landing;
