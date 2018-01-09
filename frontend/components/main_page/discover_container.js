import {connect} from "react-redux";
import Discover from './discover';
import { fetchAllPlaylist } from "../../actions/playlist_actions";

const mapStateToProps = (state) => {

  return {
    playlists: state.entities.playlists.playlist
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchAllPlaylist: () => dispatch(fetchAllPlaylist())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Discover);
