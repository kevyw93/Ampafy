import React from 'react';
import NewPlaylistFormContainer from './new_playlist_form_container';
import PlaylistDropDownContainer from '../playlist/playlist_drop_down_container';

class SongItemComponent extends React.Component{
  constructor(props){
    super(props);
    this.handleAdd = this.handleAdd.bind(this);
    this.handleOpenClose = this.handleOpenClose.bind(this);
    this.state = {bool: false};
  }

  handleAddSong(songId, playlistId) {

    return e => {this.props.addSongToPlaylist(
      {playlist_tagging:{song_id: songId, playlist_id: playlistId}});
      this.handleOpenClose();
    };
  }

  handleOpenClose(){
    let newBool = !this.state.bool;
    let newState = { bool: newBool };
    this.props.receiveSongId(this.props.song.id);
    this.setState(newState);
  }

  handleAdd() {
    if ( this.props.currentSongId === this.props.song.id && this.props.status === 'playing') {
      this.props.receivePause();
    }else if(this.props.currentSongId=== this.props.song.id  && this.props.status === 'paused'){
      this.props.receivePlay();
    }else {
      this.props.receiveCurrentSong({songId: this.props.song.id, albumImg: this.props.song.albumImg});
    }
  }

  render() {

    let form;
    let songTitle;
    let author;
    let album;
    if (this.props.song) {
      form = this.state.bool && this.props.songId === this.props.song.id ?
      <NewPlaylistFormContainer
        display={this.props.display}
        playlistId={this.props.playlistId}
        songId={this.props.song.id} />
      : null;
      songTitle = this.props.song.title;
      author = this.props.song.author;
      album = this.props.song.album;

    }

    return(
      <div className="song-list">
        <div onClick={this.handleAdd}>
          <h1 className="song-title">{this.props.index + 1}. {songTitle}</h1>
        <h1 className="song-author">{author}</h1>
      <h1>{album}</h1>
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
