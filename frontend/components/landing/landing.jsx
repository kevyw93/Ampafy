import React from "react";
import { Link } from 'react-router-dom';
import {Redirect} from 'react-router-dom';

const Landing = (props) => {

  if (props.currentUser) {
    return (
      <Redirect to='/browse/albums' />
  );
  }else {
    return (
      <main className="landing">
        <div className="wrapper-for-opacity">

          <div className="login-signup-landing">
            <div className="amplafy-logo-container">
              {/* <div> */}
                {/* <img className="ampafy-logo" src="https://s3.amazonaws.com/ampafy-seeds/KEVVVVV.png"></img> */}
              {/* </div>
              <div> */}
                <h1 className="landing-logo-title">Ampafy</h1>

              {/* </div> */}
            </div>


            <Link  className="landing-signup" to="/signup">Sign Up</Link>

          <div className="divider">
            <span className="before"></span>
            <h1 className="already-have-an-acc">Already have an Account</h1>
            <span className="after"></span>
            </div>
            <Link className="landing-login" to="/login">Log In</Link>
          </div>

          <div className="side-bar"></div>

          <div className="side-description">
            <div className="side-words-top-container">
              <h1 className="side-top-words">Get Ampafied with the </h1>
              <h1 className="side-top-words">right music.</h1>
            </div>

            <h2 className="side-middle-words">Best Songs Out There Especially to KTV</h2>
            <div className="checkbox-holder">
              <img className="checks" src="https://open.scdn.co/static/images/checkmark.png" /><h3 className="check-image-words"> Search and discover how to be Ampafied</h3>
            </div>
              <div className="checkbox-holder">
              <img className="checks" src="https://open.scdn.co/static/images/checkmark.png" /><h3 className="check-image-words">Create playlist of your favorite music</h3>
            </div>
          </div>

        </div>
      </main>
    );
  }
};


export default Landing;
