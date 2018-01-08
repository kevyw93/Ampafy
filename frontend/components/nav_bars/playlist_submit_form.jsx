import React from 'react';

class PlaylistSubmitForm extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    debugger
    let newPlaylist = this.state.playlist;
    this.props.createPlaylist({playlist: newPlaylist});
    let newState = Object.assign({}, this.state);
    newState.bool = false;
    this.setState(newState);
  }


  render() {
    return (
      <div className="form-modal-outer-container">
        <div className="form-modal-inner-container">
          <h1 className="top-of-form">Create new Playlist</h1>

          <form className="form-in-modal" onSubmit={this.handleSubmit}>
            <div className="playlist-input-container">
              <h3 className="input-top">Playlist Name</h3>
              <input className="form-input" placeholder="Start typing..." value={this.state.playlist} />
              <button className="form-sub-btn">Create</button>
            </div>

          </form>
        </div>
      </div>
    );
  }
}

export default PlaylistSubmitForm;
