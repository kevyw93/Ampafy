import {connect} from "react-redux";
import PlaylistShow from './playlist_show';
import { fetchPlaylist, fetchPlaylistSongs, deletePlaylist, updatePlaylist } from "../../actions/playlist_actions";

const mapStateToProps = (state,ownProps) => {
  let playlist;
  let songs = [];


    playlist = state.entities.playlists[ownProps.match.params.id];
    if (playlist) {
      
      if (Object.values(state.entities.songs).length > 0) {

        songs = playlist.songIds.map(songId => state.entities.songs[songId]);
      }
    }


  return {
    playlist,
    songs
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchPlaylist: (id) => dispatch(fetchPlaylist(id)),
    fetchPlaylistSongs: (songs) => dispatch(fetchPlaylistSongs(songs)),
    deletePlaylist: (id) => dispatch(deletePlaylist(id)),
    updatePlaylist: (playlist) => dispatch(updatePlaylist(playlist))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PlaylistShow);
