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
      <div className="landing">
      <div className="button-container">
        <h1 className="logo"><img></img>Sandrafy</h1>
        <Link className="landing-signup" to="/signup">Sign Up</Link>
      <h1 className="loggedin">Already have an Account</h1>
        <Link className="landing-login" to="/login">Log In</Link>
      </div>
      <div className="side-container">
        <div className="side-words" >
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
