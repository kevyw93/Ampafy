import React from "react";
import { Link } from 'react-router-dom';
import {Redirect} from 'react-router-dom';

const Landing = (props) => {

  if (props.currentUser) {
    return (
      <Redirect to='/browse' />
  );
  }else {
    return (
      <div className="landing">
        <div className="wrapper-opacity">

          <div className="button-container">
            <h1 className="logo"><img></img>Sandrafy</h1>
            <Link className="landing-signup" to="/signup">Sign Up</Link>
          <div className="words">
            <span className="before"></span>
            <h1 className="loggedin">Already have an Account</h1>
          <span className="after"></span>
          </div>
            <Link className="landing-login" to="/login">Log In</Link>
          </div>

          <div className="right-border">
          </div>

          <div className="side-container">
            <div className="inner-side-container">
              <div className="text">
              <h1 className="side-top-words">Get Sandrafied with the right music.</h1>
              <h2 className="side-middle-words">Best Songs Out There Especially to KTV</h2>
              <h3 className="check-image-words"><img src="https://open.scdn.co/static/images/checkmark.png" ></img>Search and discover how to be sandrafy</h3>
              <h3 className="check-image-words"><img src="https://open.scdn.co/static/images/checkmark.png" ></img>Create playlist of your favorite music</h3>
            </div>
            </div>
          </div>

        </div>
      </div>
    );
  }
};


export default Landing;
