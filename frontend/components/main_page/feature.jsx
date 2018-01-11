import React from 'react';
import {Link, Route} from 'react-router-dom';
// import TopNavBarContainer from '../nav-bars/top_nav-bar_container';


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

    // have a key error here
    const albs = Object.values(this.props.albums).map(
      alb =>
      (<li className="single-album">

        <Link className="img-hover-cont" to={`/browse/album/${alb.id}`}>
         <div className="img-div"style={{backgroundImage: `url(${alb.album_img})`}}>

         </div>
         <img className="img-hover-div" src="http://www.pngmart.com/files/3/Play-Button-PNG-Picture.png" />
       </Link>
        <h1 className="alb-title">{alb.title}</h1>
      </li>)
    );

    return(
      // <div className="feature">
      //   {/* <div className="top-nav">
      //     <TopNavBarContainer />
      //   </div> */}

      <div className="outer-albs">
        <div className="all-albums">
            {albs}



        </div>
      </div>


      // </div>
    );
  }
}

export default Feature;
