import React from 'react';
import SongIndex from '../album/song_index';
class Songs extends React.Component {
  constructor(props){
    super(props);
  }

  componentDidMount(){
    this.props.fetchAllSongs();
  }

  handleAdd(songId) {
    this.props.receiveCurrentSong(songId);
  }

  render() {
    let songs;
    if (this.props.songs.length > 0) {
      songs = <SongIndex songs={this.props.songs} />;
    }
    return(
      <div className="all-songs-lists">
        {songs}
      </div>
    );
  }

}

export default Songs;
