import {connect} from "react-redux";
import SessionForm from "./session_form";
import {logout, login, signup, receiveErrors} from "../../actions/session_actions";
import { withRouter } from 'react-router-dom';

const mapStateToProps = (state, ownProps) => {

  return {
    loggedIn: Boolean(state.session.currentUser),
    errors: state.errors.session,
    formType: ownProps.location.pathname.slice(1)
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  const formType = ownProps.location.pathname.slice(1);
  const processForm = (formType === "login") ? login : signup;
  return {
    processForm: (user) => dispatch(processForm(user)),
    login: (user) => dispatch(login(user)),
    clearErrors: () => dispatch(receiveErrors({}))
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SessionForm));
