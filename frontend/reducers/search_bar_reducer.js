import {RECEIVE_SEARCH, RECEIVE_SEARCH_ITEM} from '../actions/search_actions';


const initialState = {
  searchBarStatus: false,
  albums: [],
  songs: [],
};

const searchBarReducer = (state = initialState,action) => {
  let newState;
  switch (action.type) {
    case RECEIVE_SEARCH:
      newState = Object.assign({}, state, {searchBarStatus: !state.searchBarStatus});
      return newState;
    case RECEIVE_SEARCH_ITEM:
      const albums = Object.keys(action.albums);
      const songs = Object.keys(action.songs);
      newState = Object.assign({}, state, {albums: albums, songs: songs});
      return newState;
    default:
      return state;

  }
};

export default searchBarReducer;
