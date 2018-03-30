import {connect} from "react-redux";
import Feature from './feature';
import { getAllAlbums, playAlbum, getPlayerAlbum } from "../../actions/album_actions";
import { fetchSong } from "../../actions/song_actions";
import { receiveCurrentSong } from "../../actions/player_actions";

const mapStateToProps = (state) => {

  return {
    albums: state.entities.albums
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getAllAlbums: () => dispatch(getAllAlbums()),
    playAlbum: () => dispatch(playAlbum()),
    fetchSong: (id) => dispatch(fetchSong(id)),
    getPlayerAlbum: (id) => dispatch(getPlayerAlbum(id))

  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Feature);
