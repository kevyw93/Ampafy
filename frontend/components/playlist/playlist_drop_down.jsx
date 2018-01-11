import React from 'react';

class PlaylistDropDown extends React.Component {
  constructor(props){
    super(props);
  }

  // componentDidMount(){
  //   this.props.fetchAllPlaylist();
  // }

  render(){
    let playlists;
    if (this.props.playlists) {
      playlists = this.props.playlists.map(playlist =>
        <div onClick= {this.props
            .handleAddSong(this.props.songId, playlist.id)}>
          {playlist.title}
          <button onClick={this.props.handleOpenClose(this.key)}>close</button>
        </div>
      );
    }
    return (
      <div>
        {playlists}
      </div>
    );
  }
}

export default PlaylistDropDown;
