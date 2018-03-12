import {connect} from "react-redux";
import Feature from './feature';
import { getAllAlbums } from "../../actions/album_actions";
import { fetchSong } from "../../actions/song_actions";
import { receiveQueAlbum } from "../../actions/player_actions";

const mapStateToProps = (state) => {

  return {
    albums: state.entities.albums
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getAllAlbums: () => dispatch(getAllAlbums()),
    fetchSong: (id) => dispatch(fetchSong(id)),
    receiveQueAlbum: () => dispatch(receiveQueAlbum())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Feature);
