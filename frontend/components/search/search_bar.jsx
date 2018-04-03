import Modal from 'react-modal';
import React from 'react';
import SongIndexContainer from '../album/song_index_container';
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
      let newState = Object.assign({}, this.state,newPlaylist);
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
      songs = <SongIndexContainer songs={this.props.songs} />;
    }
    let show;
    if (this.state.button === 'songs') {
      show = songs;
    }else {
      show = albums;
    }

    return(
      <div className="search-bar-container">
        <form onSubmit={this.handleSubmit}>
          <input className='search-bar-form-input' onChange={this.handleChange('search')} value={this.state.search} placeholder="Search..."/>
        <button />
        </form>
          <div className="album-song-button">
            <button onClick={this.handleAlbumSong} value="albums">Albums</button>
            <button onClick={this.handleAlbumSong} value="songs">Songs</button>
          </div>

        {show}

      </div>
    );
  }
}
  export default SearchBar;
