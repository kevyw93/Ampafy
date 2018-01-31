import {connect} from "react-redux";
import MainPage from './main_page';
import { getAllAlbums } from "../../actions/album_actions";
import { fetchSong } from "../../actions/song_actions";

const mapStateToProps = (state,ownProps) => {
  return {
    albums: state.entities.albums,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getAllAlbums: () => dispatch(getAllAlbums()),
    fetchSong: (id) => dispatch(fetchSong(id))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MainPage);
