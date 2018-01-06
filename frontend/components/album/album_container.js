import {connect} from "react-redux";
import Album from './album';
import { getAlbum } from "../../actions/album_actions";
import { fetchSong } from "../../actions/song_actions";

const mapStateToProps = (state, ownProps) => {
  debugger
  return {
    albumId: parseInt(ownProps.match.params.id),
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getAlbum: (id) => dispatch(getAlbum(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Album);
