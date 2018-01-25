import { RECEIVE_CURRENT_SONG,
  RECEIVE_ALBUM_SONGS,
  RECEIVE_CURRENT_SONG_ID,
  RECEIVE_QUE_LENGTH }
  from '../actions/player_actions';
import { RECEIVE_ALBUM } from '../actions/album_actions';
import merge from 'lodash/merge';

const spaceship = (x,y) => {
  if (x > y) {
    return 1;
  }else if(x < y) {
    return -1;
  }else {
    return 0;
  }
};
const preloadedState = {
  currentSongId: null,
  queOfSongs: null,
  currentSongIndex:null,
  queLength: null,
};

const playerReducer = (state = preloadedState, action) => {
  let newState;
  switch (action.type) {
    case RECEIVE_CURRENT_SONG:
      newState = Object.assign({}, state, {currentSongId: action.songId});
      return newState;
    case RECEIVE_ALBUM_SONGS:
      newState = Object.assign({}, state, {queOfSongs: action.songs});
      return newState;
    case RECEIVE_CURRENT_SONG_ID:
      newState = Object.assign({}, state, {currentSongIndex: action.songIndex});
      return newState;
    case RECEIVE_QUE_LENGTH:
      newState = Object.assign({}, state, {queLength: action.queLength});
      return newState;
    default:
      return state;

  }
};

export default playerReducer;
