import React from 'react';
import PlaylistDropDownContainer from '../playlist/playlist_drop_down_container';

class NewPlaylistForm extends React.Component {

  constructor(props){
    super(props);
    this.handleOpenClose = this.handleOpenClose.bind(this);
    this.handleDeleteFromPlaylist = this.handleDeleteFromPlaylist.bind(this);
  }


  handleOpenClose() {
    this.props.receiveListsPlaylist();
  }
  handleDeleteFromPlaylist(e){

    e.preventDefault();
    this.props.removeSongFromPlaylist(this.props.songId);
  }

  render(){

    let openPlaylist = this.props.openListPlaylist ? <PlaylistDropDownContainer songId={this.props.songId} /> : null;
    return (
      <div>
        <ul>
          <button onClick={this.handleOpenClose}>Add To Playlist</button>
        <button onClick={this.handleDeleteFromPlaylist}>Delete From Playlist</button>
        {/* <button onClick={}>  */}
        {openPlaylist}
        </ul>
      </div>
    );
  }

}

export default NewPlaylistForm;
