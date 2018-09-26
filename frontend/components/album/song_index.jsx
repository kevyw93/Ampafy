import React from 'react';
import SongItemContainer from './song_item_container';

class SongIndex extends React.Component{
  constructor(props) {
    super(props);
  }

  componentDidMount(){
    if (this.props.willPlayAlbum && this.props.pathName !== "/browse/songs") {
      this.props.receiveCurrentSong({songId: this.props.songs[0].id, albumImg: this.props.albImg});
      this.props.playAlbum();
    }
  }

  render() {
    let songs = this.props.songs.map((song, idx) =>
      <SongItemContainer key= {idx} index={idx} playlistId={this.props.playlistId} display={this.props.display} song={song} albumId ={song.albumId}/>
    );

    return (
      <div >
      {songs}
      </div>
    );
  }
}

export default SongIndex;
