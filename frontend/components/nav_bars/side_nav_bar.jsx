import React from 'react';
import Modal from 'react-modal';
import {Link, Route} from 'react-router-dom';
// import SongIndex from '../album/song_index';

class SideNavBar extends React.Component{
  constructor(props) {
    super(props);
  }

  // handleChange(field){
  //   return e => this.setState({[field]: e.target.value});
  // }
  //
  // handleSubmit(e){
  //   e.preventDefault();
  //   let newPlaylist = {search_query: this.state.search};
  //   if (this.state.search.length !== 0) {
  //     this.props.searchDatabase(newPlaylist);
  //     let newState = Object.assign({}, {search: ''});
  //     this.setState(newState);
  //     // this.props.receiveSearchBool();
  //   }
  // }

  render(){

    return(
      <div className="side-nav-bar">
        <div className="top-bar">
          <div className="spaces">
            <Link className="search-bar" to="/search">Search</Link>
            <div className="lines"></div>
          </div>
          <div className="spaces">
            <Link to="/browse/albums"><h1 className="homepage">Home</h1></Link>
          <div className="lines"></div>
          </div>
            <div className="spaces">
              <button className="logout" onClick={this.props.logout}>Logout</button>
            <div className="lines"></div>
            </div>
        </div>
        <div className="username-sidenav">
          <h1>Hi, {this.props.user.username}</h1>
        </div>

      </div>
    );
  }
}

export default SideNavBar;
