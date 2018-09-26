import React from 'react';
import SongIndexContainer from '../album/song_index_container';
class Songs extends React.Component {
  constructor(props){
    super(props);
    this.handleAdd = this.handleAdd.bind(this);
  }

  handleAdd(songId) {
    this.props.receiveCurrentSong(songId);
  }

  render() {
    let songs;
    if (this.props.songs.length > 0) {
      songs = <SongIndexContainer songs={this.props.songs} />;
    }
    return(
      <div className="all-songs-lists">
        {songs}
      </div>
    );
  }

}

export default Songs;
