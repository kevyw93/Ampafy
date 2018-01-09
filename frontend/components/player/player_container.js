import {connect} from 'react-redux';
import Player from './player';
import { receiveCurrentSong } from "../../actions/player_actions";
import _ from 'lodash';

const mapStateToProps = (state,ownProps) => {

  return {
    songs: state.songs
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    receiveCurrentSong: (songs) => dispatch(receiveCurrentSong(songs))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Player);
