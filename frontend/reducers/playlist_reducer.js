import {RECEIVE_PLAYLIST, REMOVE_PLAYLIST, RECEIVE_ALL_PLAYLISTS, REMOVE_SONG_FROM_PLAYLIST} from '../actions/playlist_actions';

const playlistReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState;
  switch (action.type) {
    case RECEIVE_PLAYLIST:

      newState = Object.assign({}, state, action.playlist);
      return newState;
    case RECEIVE_ALL_PLAYLISTS:
      return action.playlists.playlists;
    case REMOVE_PLAYLIST:
      newState = Object.assign({}, state);
      delete newState[Object.keys(action.playlist.playlist)[0]];
      return newState;
    case REMOVE_SONG_FROM_PLAYLIST:
      newState = Object.assign({}, state, action.playlist);
      return newState;
    default:
      return state;

  }
};

export default playlistReducer;
