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
    return e => this.props.receiveCurrentSong(songId);
  }

  render() {
    let songs;
    if (this.props.songs.length > 0) {
      songs = <SongIndex songs={this.props.songs} />;
    }
    return(
      <div>
        {songs}
      </div>
    );
  }

}

export default Songs;
