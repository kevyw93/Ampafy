import {connect} from 'react-redux';
import Songs from './songs';
import {fetchAllSongs} from '../../actions/song_actions';
import { receiveCurrentSong } from "../../actions/player_actions";

const mapStateToProps = (state) => {

  return {
    songs: Object.values(state.entities.songs) || []
  };
};


const mapDispatchToProps = (dispatch) => {
  return {
    fetchAllSongs: () => dispatch(fetchAllSongs()),
    receiveCurrentSong: (song) => dispatch(receiveCurrentSong(song))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Songs);
