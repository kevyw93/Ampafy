import {connect} from "react-redux";
import Feature from '../main_page/feature';
import { getAllAlbums } from "../../actions/album_actions";
import { fetchSong } from "../../actions/song_actions";

const mapStateToProps = (state) => {
  let albumIds = state.search.albums || [];
  let albums = albumIds.map(albumId => state.entities.albums[parseInt(albumId)]);
  return {
    albums
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getAllAlbums: () => dispatch(getAllAlbums()),
    fetchSong: (id) => dispatch(fetchSong(id))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Feature);
