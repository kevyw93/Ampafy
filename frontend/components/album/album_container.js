import {connect} from "react-redux";
import Album from './album';
import { getAlbum } from "../../actions/album_actions";
import { fetchSong } from "../../actions/song_actions";
import { receiveCurrentSong,
  receiveAlbumSongs,
  receiveCurrentSongIndex,
  receiveQueLength }
  from "../../actions/player_actions";
import * as selector from '../../util/selector';
import { fetchAllPlaylist, addSongToPlaylist} from "../../actions/playlist_actions";
import {receiveModalSong, receiveStatus} from '../../actions/ui_actions';

const mapStateToProps = (state, ownProps) => {
  let album = state.entities.albums[ownProps.match.params.id];
  let songs;
  // let songIds;
  if (album) {
    // songIds = album.songIds;
   songs = selector.albumSongsSelector(album, state);
  }

  return {
    album,
    // songIds: songIds || null,
    songs: songs || [],
    playlists: Object.values(state.entities.playlists),
    isThreeDots: state.ui.isThreeDots
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    getAlbum: (id) => dispatch(getAlbum(id)),
    fetchSong: (songs) => dispatch(fetchSong(songs)),
    receiveCurrentSong: (song) => dispatch(receiveCurrentSong(song)),
    addSongToPlaylist: (payload) => dispatch(addSongToPlaylist(payload)),
    fetchAllPlaylist: () => dispatch(fetchAllPlaylist()),
    receiveModalSong: () => dispatch(receiveModalSong()),
    receiveAlbumSongs: (albumSongs) => dispatch(receiveAlbumSongs(albumSongs)),
    receiveQueLength: (queLength) => dispatch(receiveQueLength(queLength)),
    receiveCurrentSongIndex: (idx) => dispatch(receiveCurrentSongIndex(idx))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Album);
