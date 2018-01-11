import React from 'react';

class PlaylistDropDown extends React.Component {
  constructor(props){
    super(props);
    this.handleAddSong = this.handleAddSong.bind(this);
  }

  // componentDidMount(){
  //   this.props.fetchAllPlaylist();
  // }
  handleOpenClose() {
    this.props.receiveListsPlaylist();
  }

  handleAddSong(songId, playlistId) {
    debugger
    return e => {this.props.addSongToPlaylist(
      {playlist_tagging:{song_id: songId, playlist_id: playlistId}});
      this.handleOpenClose();
    };
  }

  render(){
    debugger

    let playlists;
    if (this.props.openListPlaylist) {
      playlists = this.props.playlists.map(playlist =>
        <div onClick= {this
            .handleAddSong(this.props.songId, playlist.id)}>
          {playlist.title}
        </div>
      );
    }
    return (
      <div>
        <button onClick={this.handleOpenClose}>close</button>
        {playlists}
      </div>
    );
  }
}

export default PlaylistDropDown;
