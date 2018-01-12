import React from 'react';
import {Link} from 'react-router-dom';

const SideNavBar = (props) => {
  return(
    <div className="side-nav-bar">
      <div className="top-bar">
        <div className="spaces">
          <button className="search-bar">Search</button>
          <div className="lines"></div>
        </div>
        <div className="spaces">
          <Link to="/browse/albums"><h1 className="homepage" >Home</h1></Link>
        </div>
          <div className="spaces">
            <button className="logout" onClick={props.logout}>Logout</button>
          </div>
      </div>
      {/* <div className="welcome">
        <h1>Welcome {props.user.username}</h1>

      </div> */}
    </div>
  );
};

export default SideNavBar;
