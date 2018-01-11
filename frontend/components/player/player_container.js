import {connect} from 'react-redux';
import Player from './player';
import { receiveCurrentSong } from "../../actions/player_actions";
import {receiveIsPlaying} from '../../actions/ui_actions';
// import { fetchSong } from "../../actions/song_actions";
import _ from 'lodash';

const mapStateToProps = (state,ownProps) => {

  debugger
  return {
    isPlaying: state.ui.isPlaying,
    song: state.entities.songs[state.player]

  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    receiveCurrentSong: (song) => dispatch(receiveCurrentSong(song)),
    receiveIsPlaying: () => dispatch(receiveIsPlaying())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Player);
