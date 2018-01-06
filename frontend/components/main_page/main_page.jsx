import React from 'react';
import AlbumContainer from '../album/album_container';
import {Link, Route} from 'react-router-dom';
import FeatureContainer from './feature_container';
// import SideNavBarContainer from '../nav_bars/side_nav_bar_container';

class MainPage extends React.Component {
  constructor(props) {
    super(props);
  }






  render() {
    // switch case here for top nav bar its going to be feature browse discover
    // routes will differ for each
    // the components that will always render on this page are top nav bar side bar and playbar
    // <TopNav /> <PlayBar /> <SideBar />
    // <Switch>
    // <Route path ="/browse/feature" component={Feature} />
    // <NavBar>
    // <Link to='/browse'>Browse</Link>
    // <Link to='/browse/feature'>Feature</Link>
    // <Link to='/browse/discover'>Discover</Link>
    // <NavBar>
    // <Route path ="/browse/discover" component={Discover} />
    return(
      <div className="main-page">
        <FeatureContainer />
      {/* <SideNavBarContainer /> */}
      </div>
    );
  }
}

export default MainPage;
