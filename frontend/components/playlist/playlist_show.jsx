import React from 'react';
import Song from '../album/song_index';
import {Redirect} from 'react-router-dom';
import SongIndexContainer from '../album/song_index_container';

class PlaylistShow extends React.Component {
  constructor(props){
    super(props);
    this.handleAdd = this.handleAdd.bind(this);
  }

  componentDidMount(){

    this.props.fetchPlaylist(parseInt(this.props.match.params.id));

  }
  handleDelete(playlistId) {
    return e => {
      this.props.deletePlaylist(playlistId);
      this.props.history.push('/browse/playlists');
    };
  }

  handleAdd(songId) {
    return e => this.props.receiveCurrentSong(songId);
  }

  render(){
    let title;
    let songs;
    if (this.props.playlist) {
      title = this.props.playlist.title;
      songs = <SongIndexContainer display={"playlist"} playlistId={this.props.playlist.id} songs={this.props.songs} />;

      return (
        <div>
          <div className="playlist-title-delete-container">
            <div className="playlist-show-title">
              {title}
            </div>
            <button onClick={this.handleDelete(this.props.playlist.id)}>Delete Playlist</button>
          </div>
          <div>
            {songs}
          </div>

        </div>
      );
    }else {
      return null;
    }
    // <Song component={this.props} />

  }
}

export default PlaylistShow;
