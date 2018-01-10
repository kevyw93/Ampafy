import React from 'react';
import Player from '../player/player';
import SongComponent from './song_component';

class Album extends React.Component {

 constructor(props) {
   super(props);
   this.handleAdd = this.handleAdd.bind(this);
 }

handleAdd(index) {
  return e => this.props.receiveCurrentSong(this.props.songs[index]);
}


componentDidMount(){
  this.props.getAlbum(parseInt(this.props.match.params.id));

}

render(){

  let songs = this.props.songs.map((song,idx) =>{
    return (<SongComponent key={idx} handleAdd={this.handleAdd(idx)}
      author={this.props.album.author} song={song} />);
  });

  let alb;
  if (this.props.album) {
    alb =
      <div className="album-pic-container">
        <div className="alb-img-container">
          <img className="albums-single-album-img" src={this.props.album.albumImg} />
        </div>
        <div className="album-details-container">
          <div className="album-title">{this.props.album.title}</div>
        <h1 className="alb-img-container">{this.props.album.author}</h1>
        </div>
      </div>;
  }
    return (
      <div className="album-outmost-container">
        {alb}
        {songs}
      </div>
    );

}

}

export default Album;
