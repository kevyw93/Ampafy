import React from 'react';

class Discover extends React.Component {
  constructor(props){
    super(props);
    // this.updatePlaylist = this.updatePlaylist.bind(this);
    // this.handleDelete = this.handleDelete.bind(this);
  }

  componentWillMount() {
    this.props.fetchAllPlaylist();
  }

  handleDelete(playlistId) {
    return e => this.props.deletePlaylist(playlistId);
  }
  // updatePlaylist(playlist) {
  //   return e => this.props.updatePlaylist(playlist);
  // }

  render() {
    let playlist;
    if (this.props.playlists) {
      playlist = this.props.playlists.map(play =>

        <div key={play.id}>
          {play.id}
          <img src="https://i.ebayimg.com/images/g/K-oAAMXQLw1R0v2T/s-l300.gif" />
          {play.title}
          <button onClick={this.handleDelete(play.id)}>Delete</button>
          {/* <button onClick={this.updatePlaylist(play)}>Update</button> */}
        </div>

      );
    }
    return(
      <div>
        {playlist}
      </div>
    );
  }

}

export default Discover;
