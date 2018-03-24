import React from 'react';
import {Link, Route} from 'react-router-dom';


class Feature extends React.Component {
  constructor(props) {
    super(props);
    this.handlePlayerAlbum = this.handlePlayerAlbum.bind(this);
  }


  componentDidMount() {
    this.props.getAllAlbums();
  }

  handlePlayerAlbum(id){
    debugger
    this.props.getPlayerAlbum(id);
  }

  render() {

    // have a key error here
    const albs = Object.values(this.props.albums).map(
      alb =>
      (<li key={alb.id} className="single-album">
        <Link className="img-hover-cont" to={`/browse/album/${alb.id}`}>
         <div className="img-div" style={{backgroundImage: `url(${alb.album_img})`}}>

         </div>
         <img onClick={() => this.handlePlayerAlbum(alb.id)} className="img-hover-div" src="http://www.pngmart.com/files/3/Play-Button-PNG-Picture.png" />
       </Link>
        <h1 className="alb-title">{alb.title}</h1>
      </li>)
    );

    return(


      <div className="outer-albs">
        <div className="all-albums">
            {albs}
        </div>
      </div>

    );
  }
}

export default Feature;
