import React from 'react';
import NewPlaylistFormContainer from './new_playlist_form_container';
import PlaylistDropDownContainer from '../playlist/playlist_drop_down_container';

class SongItemComponent extends React.Component{
  constructor(props){
    super(props);
    this.handleAdd = this.handleAdd.bind(this);
    this.handleOpenClose = this.handleOpenClose.bind(this);
    this.handleOpenCloseNewForm = this.handleOpenCloseNewForm.bind(this);
    this.state = {bool: false};
  }



  handleAddSong(songId, playlistId) {
    return e => {this.props.addSongToPlaylist(
      {playlist_tagging:{song_id: songId, playlist_id: playlistId}});
      this.handleOpenClose();
    };
  }

  handleOpenCloseNewForm(){
    let newBool = this.state.bool ? false : true;
    let newState = { bool: newBool };
    this.setState(newState);
  }

  handleOpenClose() {
    this.props.receiveModalSong();
    this.props.receiveSongId(this.props.song.id);
  }
  handleAdd() {

    if ( this.props.currentSongId === this.props.song.id && this.props.status === 'playing') {
      this.props.receivePause();
    }else if(this.props.currentSongId=== this.props.song.id  && this.props.status === 'paused'){
      this.props.receivePlay();
    }else {
      this.props.receiveCurrentSong(this.props.song.id);
      this.props.receiveCurrentSongIndex(this.props.songCurrentIndex);
    }
  }

  render() {
      const form = this.props.isThreeDots && this.props.songId === this.props.song.id ?
      <NewPlaylistFormContainer
        playlistId={this.props.playlistId}
        songId={this.props.song.id} />
        : null;
      // const openPlaylist = this.props.isThreeDots
      // && this.props.songId
      // ? <PlaylistDropDownContainer songId={this.props.songId} /> : null;

    return(
      <div className="song-list">
        <div onClick={this.handleAdd}>
          <h1 className="song-title">{this.props.index + 1}. {this.props.song.title}</h1>
          <h1 className="song-author">{this.props.song.author}</h1>
          <h1>{this.props.song.album}</h1>
        </div>
        <div className="modal-button">
          <button onClick={this.handleOpenClose}>
            <img className="three-dots" src="https://ncphn.org.au/wp-content/themes/ncphn/img/three-dots.png"/>
          </button>
          {form}
        </div>


      </div>
    );
      //<button onClick={this.handleOpenClose}>Three button</button>
  }
}

export default SongItemComponent;
