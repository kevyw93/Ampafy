import React from 'react';
import Player from '../player/player';

class Album extends React.Component {

 constructor(props) {
   super(props);
 }



 componentWillMount(){
   this.props.getAlbum(this.props.albumId);
 }

render(){

  if (this.props.album) {
    let songs;
    if (this.props.album.songs) {
      songs = this.props.album.songs.map(
        (song,idx) => {
          return (<div>
            <li>
              {song.title}
            </li>
            <li>
              <button onClick={this.handlePlay(idx)}>{song.title}</button>
            </li>
            <li>
              {song.id}
            </li>
          </div>);
        } );
    }
    return (
      <div>
      <div className="albums-single-album">
        <img className="albums-single-album-pic"src={this.props.album.album_img} />
        <div className="album-details">
          <h1 className="album-title">
          {this.props.album.title}
          </h1>
          <h1>
          {this.props.album.author}
          </h1>
        </div>
      </div>
        <div>
          {songs}
        </div>
      </div>
    );

  }else {
    return null;
  }
}


}

export default Album;
