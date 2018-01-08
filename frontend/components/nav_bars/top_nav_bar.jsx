import React from 'react';
import {Link} from 'react-router-dom';
import PlaylistSubmitFormContainer from './playlist_submit_form_container';
import Modal from 'react-modal';

class TopNavBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {bool: false, playlist: ''};
    // this.bool();
    this.handleOpenClose = this.handleOpenClose.bind(this);

  }
  //so topnavbar has 3 things feature blah blah
  // the routes will be in loggedIn and the they pass components in of each of the thigns


  handleOpenClose() {
    let modalMod = this.state.bool;
    modalMod = modalMod ? false : true;
    this.setState({ bool: modalMod });
  }


  // style() {
  //   return {
  //     overlay: {
  //       position:'fixed',
  //       top: 400,
  //       left: 0,
  //       right: 0,
  //       bottom: 400,
  //       backgroundColor: 'grey'
  //     },
  //     content : {
  //       position: 'absolute',
  //       top: '40px',
  //       left: '40px',
  //       right: '40px',
  //       bottom: '40px',
  //       border: '1px solid #ccc',
  //       background: '#fff',
  //       overflow: 'auto',
  //       WebkitOverflowScrolling: 'touch',
  //       borderRadius: '4px',
  //       outline: 'none',
  //       padding: '150px'
  //     }
  //
  //   };
  // }

  render() {
    // pass in create playlist
    return(
      <div className="nav_bars">
        <Link className="nav-links" to='/browse/feature'>Feature</Link>
        <Link className="nav-links" to='/browse/discover'>Discover</Link>
        <Link className="nav-links" to='/browse/random'>Random</Link>
      <button onClick={this.handleOpenClose}>New Playlist</button>
      <div className="playlist-modal">
      <Modal
          isOpen={this.state.bool}
          className="playlist-modal"
        >
          <button onClick={this.handleOpenClose}>Close</button>
          {/* <PlaylistSubmitFormContainer /> */}

        </Modal>
      </div>
      </div>
    );
  }
}

export default TopNavBar;
