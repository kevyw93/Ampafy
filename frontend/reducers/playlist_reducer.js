import {RECEIVE_PLAYLIST, REMOVE_PLAYLIST, RECEIVE_ALL_PLAYLISTS} from '../actions/playlist_actions';

const playlistReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState;
  switch (action.type) {
    case RECEIVE_PLAYLIST:
      newState = Object.assign({}, state, action.entities.playlist);
    case RECEIVE_ALL_PLAYLISTS:
      return action.entities.playlists;
    case REMOVE_PLAYLIST:
      newState = Object.assign({}, state);
      delete newState[action.entities.playlist];
    default:
      return state;

  }
};

export default playlistReducer;
