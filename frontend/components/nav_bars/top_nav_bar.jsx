import React from 'react';
import {Link} from 'react-router-dom';
import Modal from 'react-modal';

class TopNavBar extends React.Component {
  constructor(props) {
    super(props);
    this.handleOpenClose = this.handleOpenClose.bind(this);
    this.state = {title: '', user_id: null, bool: false};
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleOpenClose() {
    let modalMod = this.state.bool;
    modalMod = modalMod ? false : true;
    this.setState({ title:'',user_id: parseInt(this.props.currentUser.id), bool: modalMod });
  }

  handleSubmit(e) {
    e.preventDefault();
    let newPlaylist = {playlist: {title: this.state.title, user_id: parseInt(this.props.currentUser.id)}};
    if (this.state.title.length !== 0) {
      this.props.createPlaylist(newPlaylist);
      let newState = Object.assign({}, this.state);
      this.setState(newState);
      newState.bool = false;
    }
  }

  handleChange(field) {
    return e => this.setState({[field]: e.target.value});
  }

  render() {
    return(

      <main className="nav-bars">
        <div className="inner-nav-bar-container">

          <div className="nav-link-container">
            <Link className="nav-links" to='/browse/albums'>Albums</Link>
            <Link className="nav-links" to='/browse/playlists'>Playlists</Link>
            <Link className="nav-links" to='/browse/songs'>Songs</Link>
          </div>
          <div className="new-playlist-button">
            <button onClick={this.handleOpenClose}>New Playlist</button>
          </div>
        </div>
      <div className="playlist-modal">

      <Modal
          isOpen={this.state.bool}
          className={{
            base: 'playlist-modal',
            afterOpen: 'playlist-modal_after-open',
            beforeClose: 'playlist-modal_before-close'
          }}
          overlayClassName={{
            base: 'outer-playlist-modal',
            afterOpen: 'outer-playlist-modal_after-open',
            beforeClose: 'outer-playlist-modal_before-close'
          }}
          ariaHideApp={false}
        >
          <div className="form-modal-outer-container">
            <div className="form-modal-inner-container">
              <button onClick={this.handleOpenClose}>
                <div className="x-sign">
                  <div className="pic-of-x"><img src="https://www.stepienybarno.es/blog/wp-content/uploads/2012/12/x-decalogo-virtudes-fortalezas-arquitecto-stepienybarno-copia.jpg" /></div>

                </div>
                </button>
              <h1 className="top-of-form">Create new Playlist</h1>

              <form className="form-in-modal" onSubmit={this.handleSubmit}>
                <div className="playlist-outer-container">
                  <div className="playlist-input-container">

                    <h3 className="input-top">Playlist Name</h3>
                    <input className="form-input"
                      placeholder="Start typing..."
                      value={this.state.title}
                      onChange={this.handleChange('title')} />
                  </div>
                </div>
                <button />
                <div className="sub-btn-container">
                  <button className="cancel" onClick={this.handleOpenClose}>Cancel</button>
                  <button className="form-sub-btn">Create</button>
                </div>

              </form>
            </div>
          </div>

        </Modal>
      </div>
    </main>
    );
  }
}

export default TopNavBar;
