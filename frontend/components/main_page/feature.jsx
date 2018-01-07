import React from 'react';
import {Link, Route} from 'react-router-dom';
import TopNavBarContainer from '../nav_bars/top_nav_bar_container';


class Feature extends React.Component {
  constructor(props) {
    super(props);
  }


  componentWillMount() {
    this.props.getAllAlbums();
  }
  // handleClick(e){
  //   e.preventDefault();
  //   this.props.history.push(`/browse/albums/${this.album.id}`);
  // }

  render() {

    const albs = Object.values(this.props.albums).map(
      alb =>
      (<li className="single-album">
        <Link to={`/browse/album/${alb.id}`}>
          <img className="album-img" src={alb.album_img} />
        </Link>
        <h1 className="alb-title">{alb.title}</h1>
      </li>)
    );
    return(
      <div className="feature">
      <div className="top-nav">
        <TopNavBarContainer />
      </div>

        <div className="all-albums">

          {albs}
        </div>


      </div>
    );
  }
}

export default Feature;
