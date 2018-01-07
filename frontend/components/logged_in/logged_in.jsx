import React from 'react';
import {Redirect, Route} from 'react-router-dom';
import TopNavBarContainer from '../nav_bars/top_nav_bar_container';
import MainPageContainer from '../main_page/main_page_container';

class LoggedIn extends React.Component {
  constructor(props) {
    super(props);
  }


  render() {
    return (
      <div className="container" >
        <div>
          Hi Welcome {this.props.currentUser.username}

          <button onClick={this.props.logout}>LogOut</button>
      </div>


        <div className="logg-main">
          <Route component={MainPageContainer} />
        </div>


      </div>
    );
  }



}


export default LoggedIn;
