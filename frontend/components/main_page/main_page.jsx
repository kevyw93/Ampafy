import React from 'react';
import {Link, Route, Switch} from 'react-router-dom';
import FeatureContainer from './feature_container';
import TopNavBarContainer from '../nav_bars/top_nav_bar_container';
import DiscoverContainer from './discover_container';
import PlaylistShowContainer from '../playlist/playlist_container';
import SongsContainer from './songs_container';

class MainPage extends React.Component {
  constructor(props) {
    super(props);
  }






  render() {
    // switch case here for top nav bar its going to be feature browse discover
    // routes will differ for each
    // the components that will always render on this page are top nav bar side bar and playbar
    return(
      <div className="main-page">
        <div className="right-side">
        <div className="top-nav">
          <TopNavBarContainer />
        </div>
        <Switch>
          <Route exact path='/browse/albums' component={FeatureContainer} />
          <Route exact path='/browse/playlists' component={DiscoverContainer} />
          <Route path='/browse/playlist/:id' component={PlaylistShowContainer} />
        <Route exact path='/browse/songs' component={SongsContainer} />
        </Switch>
      </div>


      </div>
    );
  }
}

export default MainPage;
