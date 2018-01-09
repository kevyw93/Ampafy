import {connect} from 'react-redux';
import Song from './song';
import { fetchSong } from "../../actions/song_actions";
import _ from 'lodash';

const mapStateToProps = (state,ownProps) => {

  return {
    songId: parseInt(ownProps.match.params.id),
    song: state.entities.song,
    isFetched: !_.isEmpty(state.entities.song)
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchSong: (id) => dispatch(fetchSong(id))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Song);
