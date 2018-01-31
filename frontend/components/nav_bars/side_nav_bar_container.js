import {connect} from 'react-redux';
import SideNavBar from './side_nav_bar';
import {logout} from '../../actions/session_actions';
import {receiveSearchBool, searchDatabase} from '../../actions/search_actions';


const mapStateToProps = (state, ownProps) => {
  let songIds = state.search.songs;
  let albumIds = state.search.albums;
  let songs = songIds.map(songId => state.entities.songs[parseInt(songId)]);
  let albums = albumIds.map(albumId => state.entities.albums[parseInt(albumId)]);
  // const songs = songIds.map(songId => state.entities.songs[parseInt(songId)]);
  // const albums = albumIds.map(albumId => state.entities.albums[albumId]);

  return {
    user: state.entities.session.currentUser,
    statusOfModal: state.search.searchBarStatus,
    songs,
    albums

  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    logout: () => dispatch(logout()),
    receiveSearchBool: () => dispatch(receiveSearchBool()),
    searchDatabase: (title) => dispatch(searchDatabase(title))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SideNavBar);
