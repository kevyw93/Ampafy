import React from 'react';
import Modal from 'react-modal';
class PlaylistDropDown extends React.Component {
  constructor(props){
    super(props);
    this.handleAddSong = this.handleAddSong.bind(this);
  }

  // componentDidMount(){
  //   this.props.fetchAllPlaylist();
  // }
  handleOpenClose() {
    this.props.receiveListsPlaylist();
  }

  handleAddSong(songId, playlistId) {

    return e => {
      debugger
      this.props.addSongToPlaylist(
      {playlist_tagging:{song_id: songId, playlist_id: playlistId}});
      this.handleOpenClose();
    };
  }

  render(){
    let playlists;
    if (this.props.openListPlaylist) {
      playlists = this.props.playlists.map(playlist =>
        <div onClick= {this
            .handleAddSong(this.props.songId, playlist.id)}>
          {playlist.title}
        </div>
      );

    }
    return (
      <div>
        <button onClick={this.handleOpenClose}>close</button>
      <Modal
        ariaHideApp={false}
        isOpen={this.props.openListPlaylist}
        className="playlist-modal"
      >
        <div>
        {playlists}
      </div>
      </Modal>
      </div>
    );
  }
}

export default PlaylistDropDown;
