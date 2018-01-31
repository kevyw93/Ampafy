import React from 'react';
import Modal from 'react-modal';
import {Link} from 'react-router-dom';
import SongIndex from '../album/song_index';

class SideNavBar extends React.Component{
  constructor(props) {
    super(props);
    this.state = {search: ''};
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
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

  render(){
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
      <div className="side-nav-bar">
        <div className="top-bar">
          <div className="spaces">
            <button className="search-bar" onClick={this.props.receiveSearchBool}>Search</button>
            <Modal
              ariaHideApp={false}
              className="search-bar-modal"
              isOpen={this.props.statusOfModal}
              className={{
                base: 'search-bar-modal',
                afterOpen: 'search-bar-modal_after-open',
                beforeClose: 'search-bar-modal_before-close'
              }}
              overlayClassName={{
                base: 'search-bar-modal-overlay',
                afterOpen: 'search-bar-modal-overlay_after-open',
                beforeClose: 'search-bar-modal-overlay_before-close'
              }}
              >
                <button onClick={this.props.receiveSearchBool} className="close-button">Close</button>
              {/*  onsubmit and onChange*/}
              <form onSubmit={this.handleSubmit}>
                <input className='form-input' onChange={this.handleChange('search')} value={this.state.search} placeholder="Search..."/>

                <button>Search</button>
              </form>
              {albums}
              {songs}


              </Modal>
            <div className="lines"></div>
          </div>
          <div className="spaces">
            <Link to="/browse/albums"><h1 className="homepage">Home</h1></Link>
          </div>
            <div className="spaces">
              <button className="logout" onClick={this.props.logout}>Logout</button>
            </div>
        </div>
        {/* <div className="welcome">
          <h1>Welcome {this.props.user.username}</h1>

        </div> */}
      </div>
    );
  }
}

export default SideNavBar;
