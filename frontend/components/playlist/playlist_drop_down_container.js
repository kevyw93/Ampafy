import {connect} from "react-redux";
import PlaylistDropDown from './playlist_drop_down';
import { fetchAllPlaylist, deletePlaylist, updatePlaylist } from "../../actions/playlist_actions";
import {receiveListsPlaylist} from '../../actions/ui_actions';
import {addSongToPlaylist} from '../../actions/playlist_actions';
const mapStateToProps = (state,ownProps) => {


  return {
    openListPlaylist: state.ui.openListPlaylist,
    playlists: Object.values(state.entities.playlists)
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchAllPlaylist: () => dispatch(fetchAllPlaylist()),
    deletePlaylist: (id) => dispatch(deletePlaylist(id)),
    updatePlaylist: (playlist) => dispatch(updatePlaylist(playlist)),
    receiveListsPlaylist: () => dispatch(receiveListsPlaylist()),
    addSongToPlaylist: () => dispatch(addSongToPlaylist())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PlaylistDropDown);
