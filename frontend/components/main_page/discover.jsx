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
        <li className="single-playlist">
          <Link className="img-hover-cont" to={`/browse/playlist/${play.id}`}>
            <img className="img-div" src="https://i.ebayimg.com/images/g/K-oAAMXQLw1R0v2T/s-l300.gif" />
            <img className="img-hover-div" src="http://www.pngmart.com/files/3/Play-Button-PNG-Picture.png" />
          </Link>
          <h1 className="alb-title">{play.title}</h1>
      </li>

      );
    }
    return(
      <div className="outer-playlist" >
        <div className="inner-playlists">
          {playlist}
        </div>
      </div>
    );
  }

}

export default Discover;
