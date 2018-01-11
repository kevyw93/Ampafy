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
  handleAdd(id) {
    return e => this.props.receiveCurrentSong(this.props.song.id);
  }


  render() {
      const form = this.props.isThreeDots && this.props.songId === this.props.song.id ?
      <NewPlaylistFormContainer
        songId={this.props.song.id} />
        : null;

    return(
      <div>

        <button onClick={this.handleAdd(this.props.index)}>{this.props.song.title}</button>
        <h1>{this.props.author}</h1>
      <button onClick={this.handleOpenClose}>modal</button>
        {form}
          {/* <PlaylistDropDownContainer handleAddSong={this.handleAddSong} handleOpenClose={this.handleOpenClose} /> */}

          {/* <PlaylistDropDown
            playlists={this.props.playlists}
            songId={this.props.song.id}
            handleAddSong={this.handleAddSong}
            handleOpenClose={this.handleOpenClose}
          /> */}


      </div>
    );
      //<button onClick={this.handleOpenClose}>Three button</button>
  }
}

export default SongItemComponent;
