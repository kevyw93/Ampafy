import {connect} from "react-redux";
import SongItemComponent from './song_item_component';
import {receiveModalSong, receiveSongId, receivePlay,receivePause, toggleSameThreeDots } from '../../actions/ui_actions';
import { receiveCurrentSong} from "../../actions/player_actions";
import { fetchAllPlaylist, addSongToPlaylist} from "../../actions/playlist_actions";


const mapStateToProps = (state, ownProps) => {

  return {
    songCurrentIndex: ownProps.index,
    status: state.ui.status,
    songs: state.entities.songs,
    isThreeDots: state.ui.isThreeDots,
    songId: state.ui.id,
    currentSongId: state.player.currentSongId,
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    toggleSameThreeDots: () => dispatch(toggleSameThreeDots),
    receiveCurrentSong: (payload) => dispatch(receiveCurrentSong(payload)),
    addSongToPlaylist: (payload) => dispatch(addSongToPlaylist(payload)),
    fetchAllPlaylist: (userId) => dispatch(fetchAllPlaylist(userId)),
    receiveModalSong: () => dispatch(receiveModalSong()),
    receiveSongId: (id) => dispatch(receiveSongId(id)),
    receivePlay: () => dispatch(receivePlay()),
    receivePause: () => dispatch(receivePause()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SongItemComponent);
