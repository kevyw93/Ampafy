import {RECEIVE_SONG, RECEIVE_ALL_SONGS} from '../actions/song_actions';
import {RECEIVE_ALBUM} from '../actions/album_actions';
import {RECEIVE_PLAYLIST} from '../actions/playlist_actions';
import merge from 'lodash/merge';

const songReducer = (state = {}, action) => {
  let newState;
  switch (action.type) {
    case RECEIVE_SONG:

      newState = Object.assign({}, state, action.song);
      return newState;
    case RECEIVE_PLAYLIST:
      newState = Object.assign({}, state, action.songs);
      return newState;
    case RECEIVE_ALL_SONGS:
      return action.songs;
    case RECEIVE_ALBUM:
      newState = Object.assign({} , state, action.songs);
      return newState;
    default:
      return state;

  }
};

export default songReducer;
