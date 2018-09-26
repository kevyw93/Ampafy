import {connect} from "react-redux";
import SongItemComponent from './song_item_component';
import {receiveModalSong, receiveSongId, receivePlay,receivePause, toggleSameThreeDots } from '../../actions/ui_actions';
import { receiveCurrentSong, togglePausePlay} from "../../actions/player_actions";
import { fetchAllPlaylist, addSongToPlaylist} from "../../actions/playlist_actions";
import { withRouter } from 'react-router-dom';
import {turnOffPlayAlbum} from '../../actions/album_actions';
const mapStateToProps = (state, ownProps) => {

  return {
    songCurrentIndex: ownProps.index,
    status: state.ui.status,
    songs: state.entities.songs,
    songId: state.ui.id,
    currentSongId: state.player.currentSongId,
    albums: state.entities.albums,
    pathName: ownProps.location.pathname
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    togglePausePlay: () => dispatch(togglePausePlay()),
    toggleSameThreeDots: () => dispatch(toggleSameThreeDots),
    receiveCurrentSong: (payload) => dispatch(receiveCurrentSong(payload)),
    addSongToPlaylist: (payload) => dispatch(addSongToPlaylist(payload)),
    fetchAllPlaylist: (userId) => dispatch(fetchAllPlaylist(userId)),
    receiveModalSong: () => dispatch(receiveModalSong()),
    receiveSongId: (id) => dispatch(receiveSongId(id)),
    receivePlay: () => dispatch(receivePlay()),
    receivePause: () => dispatch(receivePause()),
    turnOffPlayAlbum: () => dispatch(turnOffPlayAlbum())
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SongItemComponent));
