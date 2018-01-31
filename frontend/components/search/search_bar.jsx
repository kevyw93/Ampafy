import Modal from 'react-modal';
import React from 'react';
import SongIndex from '../album/song_index';
import AlbumSearchContainer from '../album/album_search_container';

class SearchBar extends React.Component {
  constructor(props){
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleAlbumSong = this.handleAlbumSong.bind(this);
    this.state = {search: '', button: 'songs'};
  }

  handleChange(field){
    return e => this.setState({[field]: e.target.value});
  }

  handleSubmit(e){
    e.preventDefault();
    let newPlaylist = {search_query: this.state.search};
    if (this.state.search.length !== 0) {
      this.props.searchDatabase(newPlaylist);
      let newState = Object.assign({}, this.state,{search: ''});
      this.setState(newState);
      // this.props.receiveSearchBool();
    }
  }

  handleAlbumSong(e) {
    let newState;
    if (e.target.value === 'albums' && this.state.button !== 'albums') {
      newState = Object.assign({}, this.state,{button: 'albums'});
      this.setState(newState);
    }else if(e.target.value === 'songs' && this.state.button !== 'songs'){
      newState = Object.assign({}, this.state,{button: 'songs'});
      this.setState(newState);
    }
  }

  render() {
    let albums = <AlbumSearchContainer />;
    let songs;
    if (this.props.songs && this.props.songs.length > 0) {
      songs = <SongIndex songs={this.props.songs} />;
    }
    let show;
    if (this.state.button === 'songs') {
      show = songs;
    }else {
      show = albums;
    }
    debugger

    return(
      <div>
        <form onSubmit={this.handleSubmit}>
          <input className='form-input' onChange={this.handleChange('search')} value={this.state.search} placeholder="Search..."/>
          <button>Search</button>
        </form>
        {/* <div> */}
          <button onClick={this.handleAlbumSong} value="albums">Albums</button>
          <button onClick={this.handleAlbumSong} value="songs">Songs</button>
        {/* </div> */}
        {show}

      </div>
    );
  }
}
  export default SearchBar;

//   <Modal
//     ariaHideApp={false}
//     className="search-bar-modal"
//     isOpen={this.props.statusOfModal}
//     className={{
//       base: 'search-bar-modal',
//       afterOpen: 'search-bar-modal_after-open',
//       beforeClose: 'search-bar-modal_before-close'
//     }}
//     overlayClassName={{
//       base: 'search-bar-modal-overlay',
//       afterOpen: 'search-bar-modal-overlay_after-open',
//       beforeClose: 'search-bar-modal-overlay_before-close'
//     }}
//     >
//       <button onClick={this.props.receiveSearchBool} className="close-button">Close</button>
//     {/*  onsubmit and onChange*/}
//     <form onSubmit={this.handleSubmit}>
//       <input className='form-input' onChange={this.handleChange('search')} value={this.state.search} placeholder="Search..."/>
//
//     <button>Search</button>
// </form>
// {/* <Route exact path='/search/songs' component={SongIndex} /> */}
//
// <Link to="/search/songs" >Songs</Link>
// {/* {songs} */}
// {/* {albums} */}
//
//
//
//
// </Modal>
