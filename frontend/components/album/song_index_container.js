import {connect} from 'react-redux';
import SongIndex from './song_index';
import {playAlbum} from '../../actions/album_actions';
import { receiveCurrentSong } from "../../actions/player_actions";
import { withRouter } from 'react-router-dom';

const mapStateToProps = (state, ownProps) => {
  return {
    willPlayAlbum: state.player.playAlbum,
    pathName: ownProps.location.pathname
  };
};


const mapDispatchToProps = dispatch => {
  return {
    playAlbum: () => dispatch(playAlbum()),
    receiveCurrentSong: (payload) => dispatch(receiveCurrentSong(payload)),
  };
};

export default withRouter(connect(mapStateToProps,mapDispatchToProps)(SongIndex));
