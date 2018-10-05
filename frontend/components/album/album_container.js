import {connect} from "react-redux";
import Album from './album';
import { getAlbum, visitPlayerAlbum, getPlayerAlbum} from "../../actions/album_actions";
import { fetchSong } from "../../actions/song_actions";
import { receiveQueLength } from "../../actions/player_actions";
import * as selector from '../../util/selector';
import { fetchAllPlaylist, addSongToPlaylist} from "../../actions/playlist_actions";
import {receiveModalSong, receiveStatus, visitAlbum} from '../../actions/ui_actions';

const mapStateToProps = (state, ownProps) => {
  const album = state.entities.albums[ownProps.match.params.id];
  let songs;
  if (album) {
   songs = selector.albumSongsSelector(album, state);
  }

  return {
    album,
    currentUserId: state.entities.session.currentUser.id,
    songs: songs || [],
    playlists: Object.values(state.entities.playlists),
    // visting: state.ui.visiting
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    getAlbum: (id) => dispatch(getAlbum(id)),
    fetchSong: (songs) => dispatch(fetchSong(songs)),
    visitPlayerAlbum: (id) => dispatch(visitPlayerAlbum(id)),
    getPlayerAlbum: (id) => dispatch(getPlayerAlbum(id)),
    visitAlbum: () => dispatch(visitAlbum()),
    addSongToPlaylist: (payload) => dispatch(addSongToPlaylist(payload)),
    fetchAllPlaylist: (userId) => dispatch(fetchAllPlaylist(userId)),
    receiveModalSong: () => dispatch(receiveModalSong()),
    receiveQueLength: (queLength) => dispatch(receiveQueLength(queLength)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Album);
