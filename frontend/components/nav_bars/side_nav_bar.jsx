import React from 'react';
import {Link, Route} from 'react-router-dom';

class SideNavBar extends React.Component{
  constructor(props) {
    super(props);
  }

  render(){

    return(
      <main className="side-nav-bar">
        <section className="top-bar">
          <div className="links-container">
            <div className="lines"></div>
            <Link className="search-bar" to="/search"><h1 className="search-text">Search</h1><i className="fas fa-search"></i></Link>
            <div className="lines"></div>
            <Link to="/browse/albums"><h1 className="homepage">Home</h1></Link>
            <div className="lines"></div>
          </div>
        </section>
        <section className="bot-bar">
          <button className="logout-button" onClick={this.props.logout}>Logout</button>
          <div className="lines"></div>
          <h1 className="username-container">
              {this.props.user.username}
            </h1>
        </section>
      </main>
    );
  }
}

export default SideNavBar;
