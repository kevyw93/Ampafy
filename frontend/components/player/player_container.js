import {connect} from 'react-redux';
import Player from './player';
import { receiveCurrentSong, incrementCurrentSongIndex, decrementCurrentSongIndex } from "../../actions/player_actions";
import {receivePlay, receivePause, receiveStop} from '../../actions/ui_actions';
import {getAlbum } from '../../actions/album_actions';
import { withRouter } from 'react-router-dom';
import _ from 'lodash';

const mapStateToProps = (state, ownProps) => {
  let song;
  let queOfSongs;
  if(state.player.playAlbum && state.player.songs){
    queOfSongs = state.player.queOfSongs;
    const songId = queOfSongs[state.player.currentSongIndex];
    song = state.entities.songs[songId];
  }else if ( state.entities.songs[state.player.currentSongId]) {
     song =  state.entities.songs[state.player.currentSongId];
   }
  return {
    status: state.ui.status,
    song,
    albumImg: state.player.albumImg,
    visitingStatus: state.ui.visiting,
    pause: state.player.pause,
    willPlayAlbum: state.player.queLength
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    receiveCurrentSong: (payload) => dispatch(receiveCurrentSong(payload)),
    receivePlay: () => dispatch(receivePlay()),
    receivePause: () => dispatch(receivePause()),
    receiveStop: () => dispatch(receiveStop()),
    getAlbum: (id) => dispatch(getAlbum(id)),
    incrementCurrentSongIndex: () => dispatch(incrementCurrentSongIndex()),
    decrementCurrentSongIndex: () => dispatch(decrementCurrentSongIndex()),
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Player));
