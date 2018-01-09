import {connect} from 'react-redux';
import Player from './player';
import { receiveCurrentSong } from "../../actions/player_actions";
// import { fetchSong } from "../../actions/song_actions";
import _ from 'lodash';

const mapStateToProps = (state,ownProps) => {
  return {
    songs: state.player || []
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    receiveCurrentSong: (song) => dispatch(receiveCurrentSong(song))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Player);
