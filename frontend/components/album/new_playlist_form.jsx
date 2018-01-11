import React from 'react';
import PlaylistDropDownContainer from '../playlist/playlist_drop_down_container';

class NewPlaylistForm extends React.Component {

  constructor(props){
    super(props);
    this.handleOpenClose = this.handleOpenClose.bind(this);
  }


  handleOpenClose() {
    this.props.receiveListsPlaylist();
  }

  render(){

    let openPlaylist = this.props.openListPlaylist ? <PlaylistDropDownContainer songId={this.props.songId}/> : null;
    return (
      <div>
        <ul>
          <button onClick={this.handleOpenClose}>Add To Playlist</button>
        {openPlaylist}
          {/* <button>Delete From Playlist</button> */}
        </ul>
      </div>
    );
  }

}

export default NewPlaylistForm;
