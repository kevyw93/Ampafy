import React from 'react';
import Player from '../player/player';
import SongComponent from './song_component';

class Album extends React.Component {

 constructor(props) {
   super(props);
   this.handleAdd = this.handleAdd.bind(this);
 }

handleAdd(song) {

  return e => this.props.receiveCurrentSong(song);
}


componentDidMount(){
  this.props.getAlbum(parseInt(this.props.match.params.id));

}

render(){

  let songs = this.props.songs.map(song =>{
    return (<SongComponent handleAdd={this.handleAdd}
      author={this.props.album.author} song={song} />);
  });

  let alb;
  if (this.props.album) {
    alb = <div className="album-pic-container"><img className="albums-single-album-img" src={this.props.album.albumImg} /></div>;
  }
    return (
      <div className="">
        {alb}
        {songs}
      </div>
    );

}

}

export default Album;
