import {connect} from 'react-redux';
import TopNavBar from './top_nav_bar';
import {createPlaylist} from '../../actions/playlist_actions';

// pass in props into the top_nav-bar then to each components in logged_in_jsx
const mapStateToProps = (state) => {
  return {
    currentUser: state.entities.session.currentUser
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    createPlaylist: (newPlaylist) => dispatch(createPlaylist(newPlaylist))
  };
};



export default connect(mapStateToProps, mapDispatchToProps)(TopNavBar);
