import {connect} from "react-redux";
import Discover from './discover';
import { fetchAllPlaylist, deletePlaylist, updatePlaylist } from "../../actions/playlist_actions";

const mapStateToProps = (state) => {
  return {
    playlists: Object.values(state.entities.playlists),
    currentUserId: state.entities.session.currentUser.id
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchAllPlaylist: (userId) => dispatch(fetchAllPlaylist(userId)),
    deletePlaylist: (id) => dispatch(deletePlaylist(id)),
    updatePlaylist: (playlist) => dispatch(updatePlaylist(playlist))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Discover);
