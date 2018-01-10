import React from 'react';
import Song from '../album/song_component';

class PlaylistShow extends React.Component {
  constructor(props){
    super(props);
  }

  componentDidMount(){
    this.props.fetchPlaylist(parseInt(this.props.match.params.id));
    if (this.props.playlist) {
      this.props.fetchPlaylistSongs(this.props.playlist.songs);
    }
  }


  render(){
    let title;
    let songs;
    if (this.props.playlist) {
      title = this.props.playlist.title;
      songs = this.props.songs.map(song => <div>{song.title}</div>);
      debugger
      return (
        <div>
          <div className="playlist-show-title">
            {title}
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
