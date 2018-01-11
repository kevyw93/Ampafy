import React from 'react';
import {Link} from 'react-router-dom';

const SideNavBar = (props) => {
  return(
    <div className="side-nav-bar">
      <div className="top-bar">
          <button className="search-bar">Search</button>
          <div className=""></div>
          <Link className="homepage" to="/browse/albums">Home</Link>
          <button className="logout" onClick={props.logout}>Logout</button>
      </div>
      <div className="welcome">
        <h1>Welcome {props.user.username}</h1>

      </div>
    </div>
  );
};

export default SideNavBar;
