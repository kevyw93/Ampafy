import {connect} from "react-redux";
import SessionSignup from "./session_signup";
import { signup, receiveErrors} from "../../actions/session_actions";
import { withRouter } from 'react-router-dom';

const mapStateToProps = (state, ownProps) => {

  //
  return {
    loggedIn: Boolean(state.entities.session.currentUser),
    errors: state.errors.session,
    formType: ownProps.location.pathname.slice(1)
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  const formType = ownProps.location.pathname.slice(1);
  // const processForm = (formType === "login") ? login : signup;
  return {
    signup: (user) => dispatch(signup(user)),
    clearErrors: () => dispatch(receiveErrors({}))
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SessionSignup));
