import React from 'react';
import {Redirect, Route} from 'react-router-dom';
import MainPageContainer from '../main_page/main_page_container';
import {Switch} from 'react-router-dom';
import AlbumContainer from '../album/album_container';
import PlayerContainer from '../player/player_container';
import SideNavBarContainer from '../nav_bars/side_nav_bar_container';
// import SongContainer from '../songs/song_container';

class LoggedIn extends React.Component {
  constructor(props) {
    super(props);

  }


  render() {
    let backgroundColor;
    if (this.props.history.location.pathname === '/browse/albums') {
      backgroundColor = "#313d30";
    }else if(this.props.history.location.pathname === '/browse/playlists'){
      backgroundColor = "#142444";
    }else if(this.props.history.location.pathname.includes('browse/playlist')){
      backgroundColor = "#106c5b";
    }else if(this.props.history.location.pathname.includes('browse/album')){
      backgroundColor = "red";
    }
    return (
      <div style={{background: `linear-gradient(${backgroundColor}, black)`}} className="container" >
        <div className="innerContainer">
          <div className="side-nav-bar-container">
            <SideNavBarContainer />
          </div>


          <div className="logg-main">
            <Switch>
              <Route exact path="/browse/album/:id" component={AlbumContainer} />
              {/* <Route path="/browse/song/:id" component={SongContainer} /> */}
              <Route component={MainPageContainer} />
            </Switch>

          </div>
        </div>
        <div className="player">
          <PlayerContainer />
        </div>


      </div>
    );
  }



}


export default LoggedIn;
