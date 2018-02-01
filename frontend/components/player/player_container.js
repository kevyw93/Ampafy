import {connect} from 'react-redux';
import Player from './player';
import { receiveCurrentSong } from "../../actions/player_actions";
import {receivePlay, receivePause, receiveStop} from '../../actions/ui_actions';
import {getAlbum} from '../../actions/album_actions';
// import { fetchSong } from "../../actions/song_actions";
import _ from 'lodash';

const mapStateToProps = (state,ownProps) => {
  let album;
  let albId;
  let song;
   if ( state.entities.songs[state.player.currentSongId]) {
     song =  state.entities.songs[state.player.currentSongId];
     if (state.entities.albums[state.entities.songs[state.player.currentSongId].albumId]) {
       album = state.entities.albums[state.entities.songs[state.player.currentSongId].albumId];
     }
     if (state.entities.songs[state.player.currentSongId]) {
       albId = state.entities.songs[state.player.currentSongId].albumId;
     }
   }
  return {
    status: state.ui.status,
    song,
    albId,
    album
    // albImg: state.entities.albums[state.entities.songs[state.player.currentSongId.albumId]].alb

  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    receiveCurrentSong: (song) => dispatch(receiveCurrentSong(song)),
    receivePlay: () => dispatch(receivePlay()),
    receivePause: () => dispatch(receivePause()),
    receiveStop: () => dispatch(receiveStop()),
    getAlbum: (id) => dispatch(getAlbum(id))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Player);
