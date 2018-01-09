import {connect} from "react-redux";
import LoggedIn from "./logged_in";
import {logout} from "../../actions/session_actions";

const mapStateToProps = (state, ownProps) => {
  return {
    currentUser: state.entities.session.currentUser
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    logout: () => dispatch(logout())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(LoggedIn);
