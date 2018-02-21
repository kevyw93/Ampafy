import React from 'react';
import Player from '../player/player';
import Modal from 'react-modal';
import PlaylistDropDown from '../playlist/playlist_drop_down';
import SongItemComponent from './song_item_component';
import SongIndex from './song_index';

class Album extends React.Component {

 constructor(props) {
   super(props);
 }

componentDidMount(){
  this.props.getAlbum(parseInt(this.props.match.params.id));
  this.props.fetchAllPlaylist({user_id: this.props.currentUserId});
}


render(){

  let songs;
  if (this.props.songs.length > 0) {

    songs=
      <SongIndex
      author={this.props.album.author}
      songs={this.props.songs} />;
  }

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
        <div className="margin-container">

          {alb}
        </div>
        <div className="alb-songs">

          {songs}
        </div>
      </div>
    );

}

}

export default Album;
