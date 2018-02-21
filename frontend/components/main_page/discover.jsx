import React from 'react';
import {Link} from 'react-router-dom';

class Discover extends React.Component {
  constructor(props){
    super(props);
  }

  componentWillMount() {
    this.props.fetchAllPlaylist({user_id: this.props.currentUserId});
  }



  render() {
    let playlist;
    if (this.props.playlists) {
    const playlistImg = "https://s3.amazonaws.com/ampafy-seeds/Screen+Shot+2018-01-12+at+12.28.18+PM.png";
      playlist = this.props.playlists.map((play, idx) =>(

// onHover
        <li key={idx} className="single-playlist">
          <Link className="img-hover-cont" to={`/browse/playlist/${play.id}`}>
          <div className="img-div" style={{backgroundImage: `url(${playlistImg})`}}>
          {/* <img  src="https://i.ebayimg.com/images/g/K-oAAMXQLw1R0v2T/s-l300.gif" /> */}
          </div>
          <img className="img-hover-div-playlist" src="http://www.pngmart.com/files/3/Play-Button-PNG-Picture.png" />
          </Link>
            <h1 className="alb-title">{play.title}</h1>
      </li>

    ));
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
