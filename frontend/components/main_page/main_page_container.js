import {connect} from "react-redux";
import MainPage from './main_page';
import { getAllAlbums } from "../../actions/album_actions";

const mapStateToProps = (state) => {
  return {
    albums: state.albums
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getAllAlbums: () => dispatch(getAllAlbums())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MainPage);
