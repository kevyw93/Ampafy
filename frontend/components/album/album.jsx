import React from 'react';
import Player from '../player/player';
import SongComponent from './song_component';
import Modal from 'react-modal';
import PlaylistDropDown from '../playlist/playlist_drop_down';

class Album extends React.Component {

 constructor(props) {
   super(props);
   this.handleAdd = this.handleAdd.bind(this);
   this.handleAddSong = this.handleAddSong.bind(this);
   this.handleOpenClose = this.handleOpenClose.bind(this);
   this.state = {bool: false};
 }

handleAdd(index) {
  return e => this.props.receiveCurrentSong(this.props.songs[index]);
}


componentDidMount(){
  this.props.getAlbum(parseInt(this.props.match.params.id));
  this.props.fetchAllPlaylist();

}


handleOpenClose() {
  let modalMod = this.state.bool;
  modalMod = modalMod ? false : true;
  this.setState({ bool: modalMod });
}

handleAddSong(songId, playlistId) {
  return e => {this.props.addSongToPlaylist(
    {playlist_tagging:{song_id: songId, playlist_id: playlistId}});
    this.handleOpenClose();
  };
}

render(){

  let songs = this.props.songs.map((song,idx) =>{
    return (
      <ol className="songs-list">
      <li >
        <SongComponent key={idx}
          handleAdd={this.handleAdd(idx)}
          author={this.props.album.author}
          song={song} /><button onClick={this.handleOpenClose}>Three button</button>
        <Modal
            isOpen={this.state.bool}
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
            <PlaylistDropDown
              key={idx}
              playlists={this.props.playlists}
              songId={song.id}
              handleAddSong={this.handleAddSong}
              handleOpenClose={this.handleOpenClose}
            />

        </Modal>
      </li>
    </ol>
    );
  });

  let alb;
  if (this.props.album) {
    alb =
      <div className="album-pic-container">
        <div className="alb-img-container">
          <img className="albums-single-album-img" src={this.props.album.albumImg} />
        </div>
        <div className="album-details-container">
          <div className="album-title">{this.props.album.title}</div>
        <h1 className="alb-img-container">{this.props.album.author}</h1>
        </div>
      </div>;
  }
    return (
      <div className="album-outmost-container">
        {alb}
        {songs}
      </div>
    );

}

}

export default Album;
