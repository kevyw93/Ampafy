import {connect} from 'react-redux';
import SearchBar from './search_bar';
import {searchDatabase} from '../../actions/search_actions';


const mapStateToProps = (state, ownProps) => {
  let songIds = state.search.songs;
  let albumIds = state.search.albums;
  let songs = songIds.map(songId => state.entities.songs[parseInt(songId)]);
  let albums = albumIds.map(albumId => state.entities.albums[parseInt(albumId)]);
  return {
    songs,
    albums
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    searchDatabase: (title) => dispatch(searchDatabase(title))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);
