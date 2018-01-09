import {connect} from "react-redux";
import Album from './album';
import { getAlbum } from "../../actions/album_actions";
import { fetchSong } from "../../actions/song_actions";
import { receiveCurrentSong } from "../../actions/player_actions";
import * as selector from '../../util/selector';
// import { fetchSong } from "../../actions/song_actions";

const mapStateToProps = (state, ownProps) => {
  let album = state.entities.albums[ownProps.match.params.id];
  let songs;
  if (album) {
   songs = selector.albumSongsSelector(album, state);
  }
  return {
    album,
    songs: songs || []
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    getAlbum: (id) => dispatch(getAlbum(id)),
    fetchSong: (songs) => dispatch(fetchSong(songs)),
    receiveCurrentSong: (song) => dispatch(receiveCurrentSong(song))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Album);
