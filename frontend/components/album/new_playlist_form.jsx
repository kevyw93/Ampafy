import React from 'react';
import Modal from 'react-modal';
import {Link} from 'react-router-dom';
import PlaylistDropDownContainer from '../playlist/playlist_drop_down_container';

class NewPlaylistForm extends React.Component {

  constructor(props){
    super(props);
    // this.handleOpenClose = this.handleOpenClose.bind(this);
    this.state = {bool:false};
    this.handleDeleteFromPlaylist = this.handleDeleteFromPlaylist.bind(this);
    this.handleOpen = this.handleOpen.bind(this);
    this.handleClose = this.handleClose.bind(this);
  }

  componentDidMount(){
    this.props.fetchAllPlaylist();
  }
  handleAddSong(songId, playlistId) {

    return e => {
      this.props.addSongToPlaylist(
      {playlist_tagging:{song_id: songId, playlist_id: playlistId}});
      this.handleClose();
    };
  }


  handleOpen() {
    let modalMod;
    modalMod = true;
    this.setState({bool: modalMod });

  }

  handleClose(){
    let modalMod;
    modalMod = false;
    this.setState({bool: modalMod });
  }


  // handleOpenClose() {
  //   this.props.receiveListsPlaylist();
  // }
  handleDeleteFromPlaylist(e){

    e.preventDefault();
    this.props.removeSongFromPlaylist({playlist_id: this.props.playlistId, song_id: this.props.songId});
  }

  render(){
    let playlists;
    const playlistImg = "https://s3.amazonaws.com/ampafy-seeds/Screen+Shot+2018-01-12+at+12.28.18+PM.png";
    // if (this.props.openListPlaylist) {
      playlists = this.props.playlists.map((play, idx) =>


        <li key={idx} onClick={this.handleAddSong(this.props.songId, play.id)} className="single-playlist">
          <Link className="img-hover-cont" to={`/browse/playlist/${play.id}`}>
          <div className="img-div" style={{backgroundImage: `url(${playlistImg})`}}>
          </div>
          </Link>
          <h1 className="alb-title">{play.title}</h1>
      </li>
    );

    // let openPlaylist = this.props.openListPlaylist ? <PlaylistDropDownContainer playlistId={this.props.playlistId} songId={this.props.songId} /> : null;
    const button = this.props.display === "playlist" ? <button onClick={this.handleDeleteFromPlaylist}>Delete From Playlist</button> : null;
    return (
      <div>
        <ul className="playlists-adding-button">
          <button className="add-playlist-button" onClick={this.handleOpen}>Add To Playlist</button>
          {button}
        <Modal
          ariaHideApp={false}
          className="playlist-modal"
          isOpen={this.state.bool}
          className={{
            base: 'playlist-modal',
            afterOpen: 'playlist-modal-after-open',
            beforeClose: 'playlist-modal-before-close'
          }}
          overlayClassName={{
            base: 'outer-playlist-modal',
            afterOpen: 'outer-playlist-modal-after-open',
            beforeClose: 'outer-playlist-modal-before-close'
          }}
        >
          <div className="in-modal-adding-playlist-container">
            <button onClick={this.handleClose}><img className="new-playlist-modal-cancel-button" src="http://www.stepienybarno.es/blog/wp-content/uploads/2012/12/x-decalogo-virtudes-fortalezas-arquitecto-stepienybarno-copia.jpg" /></button>
            <h1 className="add-playlist-words">Add to playlist</h1>
            <div className="adding-playlists-container">
              {playlists}
            </div>

          </div>
        </Modal>

        </ul>
      </div>
    );
  }

}

export default NewPlaylistForm;
