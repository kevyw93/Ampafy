import {connect} from 'react-redux';
import SongIndex from './song_index';
import {playAlbum} from '../../actions/album_actions';
import { receiveCurrentSong } from "../../actions/player_actions";

const mapStateToProps = state => {
  return {
    willPlayAlbum: state.player.playAlbum
  };
};


const mapDispatchToProps = dispatch => {
  return {
    playAlbum: () => dispatch(playAlbum()),
    receiveCurrentSong: (songId) => dispatch(receiveCurrentSong(songId))
  };
};

export default connect(mapStateToProps,mapDispatchToProps)(SongIndex);
