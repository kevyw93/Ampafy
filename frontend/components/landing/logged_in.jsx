import React from 'react';
import {Redirect} from 'react-router-dom';

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
        <button onClick={this.props.logout}>LogOut</button>

      </div>
    );
  }



}


export default LoggedIn;
