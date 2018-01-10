import React from 'react';
import {Link} from 'react-router-dom';
import Modal from 'react-modal';

class TopNavBar extends React.Component {
  constructor(props) {
    super(props);
    // this.bool();
    this.handleOpenClose = this.handleOpenClose.bind(this);
    this.state = {title: '', user_id: parseInt(this.props.currentUser.id), bool: false};
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);


  }
  //so topnavbar has 3 things feature blah blah
  // the routes will be in loggedIn and the they pass components in of each of the thigns


  handleOpenClose() {
    let modalMod = this.state.bool;
    modalMod = modalMod ? false : true;
    this.setState({ title:'',user_id: parseInt(this.props.currentUser.id), bool: modalMod });
  }

  handleSubmit(e) {
    e.preventDefault();
    let newPlaylist = {playlist: {title: this.state.title, user_id: this.state.user_id}};

    this.props.createPlaylist(newPlaylist);
    let newState = Object.assign({}, this.state);
    newState.bool = false;
    this.setState(newState);
  }

  handleChange(field) {
    return e => this.setState({[field]: e.target.value});
  }



  render() {
    return(

      <div className="nav-bars">
        <Link className="nav-links" to='/browse/albums'>Albums</Link>
      <Link className="nav-links" to='/browse/playlists'>Playlists</Link>
        <Link className="nav-links" to='/browse/random'>Random</Link>
      <button onClick={this.handleOpenClose}>New Playlist</button>
      <div className="playlist-modal">

      <Modal
          isOpen={this.state.bool}
          className="playlist-modal"
        >
          <div className="form-modal-outer-container">
            <div className="form-modal-inner-container">
              <h1 className="top-of-form">Create new Playlist</h1>

            <button onClick={this.handleOpenClose}>Close</button>
              <form className="form-in-modal" onSubmit={this.handleSubmit}>
                <div className="playlist-input-container">
                  <h3 className="input-top">Playlist Name</h3>
                <input className="form-input"
                  placeholder="Start typing..."
                  value={this.state.title}
                  onChange={this.handleChange('title')} />
                  <button className="form-sub-btn">Create</button>
                </div>

              </form>
            </div>
          </div>

        </Modal>
      </div>
      </div>
    );
  }
}

export default TopNavBar;
