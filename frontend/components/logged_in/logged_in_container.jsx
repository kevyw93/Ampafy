import {connect} from "react-redux";
import LoggedIn from "./logged_in";
import {logout} from "../../actions/session_actions";
import { fetchAllSongs } from "../../actions/song_actions";

const mapStateToProps = (state, ownProps) => {
  return {
    currentUser: state.entities.session.currentUser
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    logout: () => dispatch(logout()),
    fetchAllSongs: () => dispatch(fetchAllSongs())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(LoggedIn);
