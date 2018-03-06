import {connect} from 'react-redux';
import Player from './player';
import { receiveCurrentSong, incrementCurrentSongIndex } from "../../actions/player_actions";
import {receivePlay, receivePause, receiveStop} from '../../actions/ui_actions';
import {getAlbum} from '../../actions/album_actions';
// import { fetchSong } from "../../actions/song_actions";
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

  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    receiveCurrentSong: (song) => dispatch(receiveCurrentSong(song)),
    receivePlay: () => dispatch(receivePlay()),
    receivePause: () => dispatch(receivePause()),
    receiveStop: () => dispatch(receiveStop()),
    getAlbum: (id) => dispatch(getAlbum(id)),
    incrementCurrentSongIndex: () => dispatch(incrementCurrentSongIndex()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Player);
