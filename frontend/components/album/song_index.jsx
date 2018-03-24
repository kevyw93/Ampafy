import React from 'react';
import SongItemContainer from './song_item_container';

class SongIndex extends React.Component{
  constructor(props) {
    super(props);
  }

  componentDidMount(){
    if (this.props.willPlayAlbum) {
      this.props.receiveCurrentSong(this.props.songs[0].id);
      this.props.playAlbum();
      debugger
    }
  }

  render() {
    let songs = this.props.songs.map((song, idx) => (
        <SongItemContainer key= {idx} index={idx} playlistId={this.props.playlistId} display={this.props.display} song={song}/>
        )
    );

    return (
      <div >
      {songs}
      </div>
    );
  }
}

export default SongIndex;
