import {connect} from 'react-redux';
import TopNavBar from './top_nav_bar';

// pass in props into the top_nav_bar then to each components in logged_in_jsx
const mapStateToProps = (state) => {
  return {
    currentUser: state.session.currentUser
  };
};

export default connect(mapStateToProps)(TopNavBar);
