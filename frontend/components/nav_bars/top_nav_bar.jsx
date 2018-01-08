import React from 'react';
import {Link} from 'react-router-dom';
import Modal from 'react-modal';
class TopNavBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {bool: false};
    // this.bool();
    this.handleOpenClose = this.handleOpenClose.bind(this);
  }
  //so topnavbar has 3 things feature blah blah
  // the routes will be in loggedIn and the they pass components in of each of the thigns

  handleSubmit(e) {
    e.preventDefault();
    // this.props.
  }

  handleOpenClose() {
    let dup = this.state.bool;
    dup = dup ? false : true;
    this.setState({ bool: dup });
  }
  style() {
    return {
      overlay: {
        position:'fixed',
        top: 400,
        left: 0,
        right: 0,
        bottom: 400,
        backgroundColor: 'grey'
      },
      content : {
        position: 'absolute',
        top: '40px',
        left: '40px',
        right: '40px',
        bottom: '40px',
        border: '1px solid #ccc',
        background: '#fff',
        overflow: 'auto',
        WebkitOverflowScrolling: 'touch',
        borderRadius: '4px',
        outline: 'none',
        padding: '150px'
      }

    };
  }

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
          <div className="form-modal-outer-container">
            <div className="form-modal-inner-container">
              <h1 className="top-of-form">Create new Playlist</h1>
              <button onClick={this.handleOpenClose}>Close</button>

              <form className="form-in-modal">
                <div className="playlist-input-container">
                  <h3 className="input-top">Playlist Name</h3>
                  <input className="form-input"placeholder="Start typing..." />
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
