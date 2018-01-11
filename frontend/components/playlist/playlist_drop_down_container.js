import {connect} from "react-redux";
import PlaylistDropDown from './playlist_drop_down';
import { fetchAllPlaylist, deletePlaylist, updatePlaylist } from "../../actions/playlist_actions";

const mapStateToProps = (state,ownProps) => {


  return {
    playlists: Object.values(state.entities.playlists)
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchAllPlaylist: () => dispatch(fetchAllPlaylist()),
    deletePlaylist: (id) => dispatch(deletePlaylist(id)),
    updatePlaylist: (playlist) => dispatch(updatePlaylist(playlist))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PlaylistDropDown);
