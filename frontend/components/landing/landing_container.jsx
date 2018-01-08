import {connect} from "react-redux";
import Landing from "./landing";
import {logout} from "../../actions/session_actions";

const mapStateToProps = (state) => {
  debugger
  return {
    currentUser: state.entities.session.currentUser
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    logout: () => dispatch(logout())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Landing);
