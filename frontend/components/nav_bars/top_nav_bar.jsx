import React from 'react';
import {Link} from 'react-router-dom';
class TopNavBar extends React.Component {
  constructor(props) {
    super(props);
  }
  //so topnavbar has 3 things feature blah blah
  // the routes will be in loggedIn and the they pass components in of each of the thigns

  render() {
    return(
      <div>
        <Link to='/browse/feature'>Feature</Link>
        <Link to='/browse/discover'>Discover</Link>
        <Link to='/browse/random'>Random</Link>
      </div>
    );
  }
}

export default TopNavBar;
