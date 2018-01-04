import React from 'react';
import {Redirect} from 'react-router-dom';
import TopNavBarContainer from '../nav_bars/top_nav_bar_container';

class LoggedIn extends React.Component {
  constructor(props) {
    super(props);
  }


  render() {
    return (
      <div>
        <header>
          Hi Welcome {this.props.currentUser.username}
        </header>
        <TopNavBarContainer />
        <button onClick={this.props.logout}>LogOut</button>

      </div>
    );
  }



}


export default LoggedIn;
