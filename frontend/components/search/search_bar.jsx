import Modal from 'react-modal';
import React from 'react';
import SongIndex from '../album/song_index';

class SearchBar extends React.Component {
  constructor(props){
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.state = {search: ''};
  }
  handleChange(field){
    return e => this.setState({[field]: e.target.value});
  }

  handleSubmit(e){
    e.preventDefault();
    let newPlaylist = {search_query: this.state.search};
    if (this.state.search.length !== 0) {
      this.props.searchDatabase(newPlaylist);
      let newState = Object.assign({}, {search: ''});
      this.setState(newState);
      // this.props.receiveSearchBool();
    }
  }

  render() {
    debugger
    let albums;
    if (this.props.albums && this.props.albums.length > 0) {
      albums = this.props.albums.map(album => album.title);
    }
    let songs;
    if (this.props.songs && this.props.songs.length > 0) {
      songs = <SongIndex songs={this.props.songs} />;
    }
    return(
      <div>
        <form onSubmit={this.handleSubmit}>
          <input className='form-input' onChange={this.handleChange('search')} value={this.state.search} placeholder="Search..."/>
          <button>Search</button>
        </form>
        
        {/* <Link></Link>
        {songs}
        {albums} */}
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
