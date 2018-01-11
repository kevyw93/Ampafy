import React from 'react';
import Modal from 'react-modal';

class SongItemComponent extends React.Component{
  constructor(props){
    super(props);
    this.handleAdd = this.handleAdd.bind(this);
    this.handleOpenClose = this.handleOpenClose.bind(this);
  }

  handleAddSong(songId, playlistId) {
    return e => {this.props.addSongToPlaylist(
      {playlist_tagging:{song_id: songId, playlist_id: playlistId}});
      this.handleOpenClose();
    };
  }

  handleOpenClose() {
    this.props.receiveModalSong();
  }
  handleAdd(id) {
    return e => this.props.receiveCurrentSong(this.props.song.id);
  }


  render() {

    return(
      <div>
        <button onClick={this.handleAdd(this.props.index)}>Play</button>
      <button onClick={this.handleOpenClose}>leo</button>
      <Modal
        isOpen={this.props.isThreeDots}
        ariaHideApp={false}
        className={{
          base: 'playlist-drop-down',
          afterOpen: 'playlist-drop-down_after-open',
          beforeClose: 'playlist-drop-down_before-close'
        }}
        overlayClassName={{
          base: 'playlist-drop-down',
          afterOpen: 'playlist-drop-down_after-open',
          beforeClose: 'playlist-drop-down_before-close'
        }}
        >

          {/* <PlaylistDropDown
            playlists={this.props.playlists}
            songId={this.props.song.id}
            handleAddSong={this.handleAddSong}
            handleOpenClose={this.handleOpenClose}
          /> */}

        </Modal>
      </div>
    );
      //<button onClick={this.handleOpenClose}>Three button</button>
  }
}

export default SongItemComponent;
