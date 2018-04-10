import {connect} from "react-redux";
import PlaylistShow from './playlist_show';
import { receiveCurrentSong } from "../../actions/player_actions";
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
    currentUserId: state.entities.session.currentUser.id,
    playlistId: parseInt(ownProps.match.params.id),
    playlist,
    songs
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchPlaylist: (id) => dispatch(fetchPlaylist(id)),
    fetchPlaylistSongs: (songs) => dispatch(fetchPlaylistSongs(songs)),
    deletePlaylist: (id) => dispatch(deletePlaylist(id)),
    updatePlaylist: (playlist) => dispatch(updatePlaylist(playlist)),
    receiveCurrentSong: (payload) => dispatch(receiveCurrentSong(payload))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PlaylistShow);
