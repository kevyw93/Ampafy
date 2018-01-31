import {connect} from 'react-redux';
import SideNavBar from './side_nav_bar';
import {logout} from '../../actions/session_actions';
import {receiveSearchBool, searchDatabase} from '../../actions/search_actions';


const mapStateToProps = (state, ownProps) => {



  return {
    user: state.entities.session.currentUser,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    logout: () => dispatch(logout()),

  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SideNavBar);
