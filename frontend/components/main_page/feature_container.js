import {connect} from "react-redux";
import Feature from './feature';
import { getAllAlbums } from "../../actions/album_actions";
import { fetchSong } from "../../actions/song_actions";

const mapStateToProps = (state) => {
  return {
    albums: state.albums
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getAllAlbums: () => dispatch(getAllAlbums()),
    fetchSong: (id) => dispatch(fetchSong(id))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Feature);
