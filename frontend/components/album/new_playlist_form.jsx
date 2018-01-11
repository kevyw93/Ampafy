import React from 'react';

class NewPlaylistForm extends React.Component {

  constructor(props){
    super(props);
  }

  handleAddSong(songId, playlistId) {
    return e => {this.props.addSongToPlaylist(
      {playlist_tagging:{song_id: songId, playlist_id: playlistId}});
      this.handleOpenClose();
    };
  }

  render(){
    return (
      <div>
        <ul>
          <button>Add To Playlist</button>
          <button>Delete From Playlist</button>
        </ul>
      </div>
    );
  }

}

export default NewPlaylistForm;
