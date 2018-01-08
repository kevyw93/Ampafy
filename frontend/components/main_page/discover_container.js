import {connect} from "react-redux";
import Discover from './discover';
import { receiveAllPlaylist } from "../../actions/playlist_actions";

const mapStateToProps = (state) => {
  return {
    playlists: state.playlists
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    receiveAllPlaylist: () => dispatch(receiveAllPlaylist())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Discover);
