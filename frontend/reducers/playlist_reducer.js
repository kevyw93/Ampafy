import {RECEIVE_PLAYLIST, REMOVE_PLAYLIST, RECEIVE_ALL_PLAYLISTS} from '../actions/playlist_actions';

const playlistReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState;
  switch (action.type) {
    case RECEIVE_PLAYLIST:
      newState = Object.assign({}, state, action.playlist);
      return newState;
    case RECEIVE_ALL_PLAYLISTS:
      return action.playlists;
    case REMOVE_PLAYLIST:
    debugger
      newState = Object.assign({}, state);
      delete newState[Object.keys(action.playlist)];
      return newState;
    default:
      return state;

  }
};

export default playlistReducer;
