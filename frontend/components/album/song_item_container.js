import {connect} from "react-redux";
import SongItemComponent from './song_item_component';
import {receiveModalSong, receiveSongId } from '../../actions/ui_actions';
import { receiveCurrentSong } from "../../actions/player_actions";
import { fetchAllPlaylist, addSongToPlaylist} from "../../actions/playlist_actions";


const mapStateToProps = (state, ownProps) => {

  return {
    songs: state.entities.songs,
    isThreeDots: state.ui.isThreeDots,
    songId: state.ui.id
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    receiveCurrentSong: (song) => dispatch(receiveCurrentSong(song)),
    addSongToPlaylist: (payload) => dispatch(addSongToPlaylist(payload)),
    fetchAllPlaylist: () => dispatch(fetchAllPlaylist()),
    receiveModalSong: () => dispatch(receiveModalSong()),
    receiveSongId: (id) => dispatch(receiveSongId(id))

  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SongItemComponent);
