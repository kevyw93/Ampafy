import {RECEIVE_PLAYLIST, REMOVE_PLAYLIST, RECEIVE_ALL_PLAYLISTS} from '../actions/playlist_actions';

const playlistReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState;
  switch (action.type) {
    case RECEIVE_PLAYLIST:

      newState = Object.assign({}, state, action.playlist);
    case RECEIVE_ALL_PLAYLISTS:
    debugger
      return action.playlists;
    case REMOVE_PLAYLIST:
      debugger
      newState = Object.assign({}, state);
      delete newState[action.playlist.id];
      debugger
      return newState;
    default:
      return state;

  }
};

export default playlistReducer;
