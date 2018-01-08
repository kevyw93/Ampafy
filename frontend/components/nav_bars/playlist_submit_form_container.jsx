import {connect} from 'react-redux';
import PlaylistSubmitForm from './playlist_submit_form';
import {createPlaylist} from '../../actions/playlist_actions';

const mapStateToProps = (state) => {
  debugger
  return {
    playlist: state.playlist
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    createPlaylist: (newPlaylist) => dispatch(createPlaylist(newPlaylist))
  };
};


export default connect(mapStateToProps, mapDispatchToProps)(PlaylistSubmitForm);
