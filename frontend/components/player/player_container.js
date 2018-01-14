import {connect} from 'react-redux';
import Player from './player';
import { receiveCurrentSong } from "../../actions/player_actions";
import {receivePlay, receivePause, receiveStop} from '../../actions/ui_actions';
// import { fetchSong } from "../../actions/song_actions";
import _ from 'lodash';

const mapStateToProps = (state,ownProps) => {
  return {
    status: state.ui.status,
    song: state.entities.songs[state.player.currentSongId],

  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    receiveCurrentSong: (song) => dispatch(receiveCurrentSong(song)),
    receivePlay: () => dispatch(receivePlay()),
    receivePause: () => dispatch(receivePause()),
    receiveStop: () => dispatch(receiveStop())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Player);
