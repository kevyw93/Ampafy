import {connect} from 'react-redux';
import NewPlaylistForm from './new_playlist_form';
import {receiveListsPlaylist} from '../../actions/ui_actions';

const mapStateToProps = (state) => {
  return {
    currentUser: state.entities.session.currentUser,
    playlists:  Object.values(state.entities.playlists),
    openListPlaylist: state.ui.openListPlaylist
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    receiveListsPlaylist: () =>  dispatch(receiveListsPlaylist())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(NewPlaylistForm);
