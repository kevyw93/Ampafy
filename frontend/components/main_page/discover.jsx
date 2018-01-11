import React from 'react';
import {Link} from 'react-router-dom';

class Discover extends React.Component {
  constructor(props){
    super(props);
  }

  componentDidMount() {
    this.props.fetchAllPlaylist();
  }



  render() {
    let playlist;
    if (this.props.playlists) {
      playlist = this.props.playlists.map(play =>

// onHover
        <li className="single-album">
          <Link to={`/browse/playlist/${play.id}`}>
            <img className="album-img" src="https://i.ebayimg.com/images/g/K-oAAMXQLw1R0v2T/s-l300.gif" />
          </Link>
          <h1 className="alb-title">{play.title}</h1>
      </li>

      );
    }
    return(
      <div className="all-albums" >
        <div className="inner-albs">
          {playlist}
        </div>
      </div>
    );
  }

}

export default Discover;
