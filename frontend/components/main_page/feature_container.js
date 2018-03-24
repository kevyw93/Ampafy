import {connect} from "react-redux";
import Feature from './feature';
import { getAllAlbums, getPlayerAlbum } from "../../actions/album_actions";
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
    getPlayerAlbum: (id) => dispatch(getPlayerAlbum(id)),
    fetchSong: (id) => dispatch(fetchSong(id)),
    receiveCurrentSong: (songId) => dispatch(receiveCurrentSong(songId))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Feature);
