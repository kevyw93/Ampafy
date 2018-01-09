import React from 'react';
import {Redirect, Route} from 'react-router-dom';
import MainPageContainer from '../main_page/main_page_container';
import {Switch} from 'react-router-dom';
import AlbumContainer from '../album/album_container';
import SongContainer from '../songs/song_container';

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
          <Switch>
            <Route exact path="/browse/album/:id" component={AlbumContainer} />
            <Route path="/browse/song/:id" component={SongContainer} />
            <Route component={MainPageContainer} />
          </Switch>
        </div>


      </div>
    );
  }



}


export default LoggedIn;
