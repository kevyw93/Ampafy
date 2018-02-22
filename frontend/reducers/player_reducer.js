import { RECEIVE_CURRENT_SONG,
  RECEIVE_ALBUM_SONGS,
  RECEIVE_CURRENT_SONG_ID,
  RECEIVE_QUE_LENGTH,
  INCREMENT_CURRENT_SONG_INDEX
  }
  from '../actions/player_actions';
import { RECEIVE_ALBUM } from '../actions/album_actions';
// import merge from 'lodash/merge';

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
  playAlbum: false,
  queOfSongs: [],
  currentSongIndex: 0,
  queLength: null,
  endQue: false,
};

const playerReducer = (state = preloadedState, action) => {
  let newState;
  switch (action.type) {
    case RECEIVE_CURRENT_SONG:
      newState = Object.assign({}, state, {currentSongId: action.songId, playAlbum: false});
      return newState;
    case RECEIVE_ALBUM:
      newState = Object.assign({}, state, {queOfSongs: Object.keys(action.songs),
        playAlbum:true, queLength: Object.keys(action.songs).length});
      return newState;
    case INCREMENT_CURRENT_SONG_INDEX:
      if (state.queLength && state.currentSongIndex + 1 < state.queLength) {
        const currentSongIndex = state.currentSongIndex + 1;
        newState = Object.assign({}, state, {currentSongIndex: currentSongIndex, endQue: false});
      }else{

        newState = Object.assign({}, state, {endQue: true, currentSongIndex: 0});
      }
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
