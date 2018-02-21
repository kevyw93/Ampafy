import {connect} from 'react-redux';
import NewPlaylistForm from './new_playlist_form';
import {receiveListsPlaylist} from '../../actions/ui_actions';
import {removeSongFromPlaylist} from '../../actions/playlist_actions';
import { fetchAllPlaylist } from "../../actions/playlist_actions";
import {addSongToPlaylist} from '../../actions/playlist_actions';

const mapStateToProps = (state) => {
  return {
    currentUser: state.entities.session.currentUser,
    playlists:  Object.values(state.entities.playlists),
    // openListPlaylist: state.ui.openListPlaylist
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchAllPlaylist: (userId) => dispatch(fetchAllPlaylist(userId)),
    receiveListsPlaylist: () =>  dispatch(receiveListsPlaylist()),
    removeSongFromPlaylist: (ids) => dispatch(removeSongFromPlaylist(ids)),
    addSongToPlaylist: (post) => dispatch(addSongToPlaylist(post))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(NewPlaylistForm);
