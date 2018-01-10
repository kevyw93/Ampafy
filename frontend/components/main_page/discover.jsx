import React from 'react';
import {Link} from 'react-router-dom';

class Discover extends React.Component {
  constructor(props){
    super(props);
    this.handleDelete = this.handleDelete.bind(this);
  }

  componentWillMount() {
    this.props.fetchAllPlaylist();
  }

  handleDelete(playlistId) {
    return e => this.props.deletePlaylist(playlistId);
  }


  render() {
    let playlist;
    if (this.props.playlists) {
      playlist = this.props.playlists.map(play =>

// onHover
        <div key={play.id}>
          <Link to={`/browse/playlist/${play.id}`}>
            <img src="https://i.ebayimg.com/images/g/K-oAAMXQLw1R0v2T/s-l300.gif" />
          </Link>
          {play.id}
          {play.title}
          <button onClick={this.handleDelete(play.id)}>Delete</button>
        </div>

      );
    }
    return(
      <div id="playlists" style={{ background: 'linear-gradient(darkslategrey, black)' }}>
        {playlist}
      </div>
    );
  }

}

export default Discover;
