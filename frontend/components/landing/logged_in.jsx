import React from 'react';
import {Redirect} from 'react-router-dom';
import TopNavBarContainer from '../nav_bars/top_nav_bar_container';

class LoggedIn extends React.Component {
  constructor(props) {
    super(props);
  }


  render() {
    return (
      <div className="container" >
      
        <div className="top-nav" ><TopNavBarContainer /></div>

      <footer>
        Hi Welcome {this.props.currentUser.username}

        <button onClick={this.props.logout}>LogOut</button>
      </footer>

      </div>
    );
  }



}


export default LoggedIn;
