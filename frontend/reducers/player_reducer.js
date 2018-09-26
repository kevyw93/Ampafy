 import { RECEIVE_CURRENT_SONG,
  RECEIVE_QUE_LENGTH,
  INCREMENT_CURRENT_SONG_INDEX,
  DECREMENT_CURRENT_SONG_INDEX,
  TOGGLE_PAUSE_PLAY
  }
  from '../actions/player_actions';
import { RECEIVE_PLAY, RECEIVE_STOP, RECEIVE_PAUSE} from '../actions/ui_actions';
import { PLAY_ALBUM, RECEIVE_PLAYER_ALBUM, RECEIVE_ALBUM, VISIT_PLAYER_ALBUM, PLAY_FULL_ALBUM } from '../actions/album_actions';
import { RECEIVE_CURRENT_USER } from '../actions/session_actions';


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
  albumImg: null,
  visitingSongs: [],
  visitingQueLength: null,
  pause: false,
};

const playerReducer = (state = preloadedState, action) => {
  let newState;
  let currentSongIndex;
  let endQue;
  let playAlbum;

  switch (action.type) {
    case RECEIVE_PLAY:
      newState = Object.assign({}, state, {pause: false});
      return newState;
    case RECEIVE_PAUSE:
      newState = Object.assign({}, state, {pause: true});
      return newState
    case RECEIVE_CURRENT_SONG:
      const newSongIndex = state.queOfSongs.indexOf(action.songId.toString());
      newState = Object.assign({}, state, {currentSongId: action.songId, playAlbum: true, currentSongIndex: newSongIndex, albumImg: action.albumImg});
      return newState;
    case RECEIVE_PLAYER_ALBUM:
      const queOfSongs = action.songs ? Object.keys(action.songs) : null;
      const queLength = queOfSongs ? queOfSongs.length : [];
      newState = Object.assign({}, state, {queOfSongs: queOfSongs,
         queLength: queLength});
      return newState;
    case VISIT_PLAYER_ALBUM:
      const visitingSongs = action.songs ? Object.keys(action.songs) : null;
      const visitingQueLength = visitingSongs ? visitingSongs.length : [];
      newState = Object.assign({}, state, {visitingSongs: visitingSongs, visitingQueLength : visitingQueLength });
      return newState;

    case PLAY_ALBUM:
      newState = Object.assign({}, state, {playAlbum: !state.playAlbum});
      return newState;
    case INCREMENT_CURRENT_SONG_INDEX:
      if (state.queLength && state.currentSongIndex + 1 < state.queLength) {
        currentSongIndex = state.currentSongIndex + 1;
        endQue = false;
        playAlbum = true;
      }else{
        currentSongIndex = 0;
        endQue = true;
        playAlbum = false;
      }
      newState = Object.assign({}, state, {currentSongIndex: currentSongIndex, currentSongId: state.queOfSongs[currentSongIndex], endQue: endQue, playAlbum: playAlbum});
      return newState;
    case DECREMENT_CURRENT_SONG_INDEX:
      if (state.queLength && state.currentSongIndex - 1 >= 0) {
        currentSongIndex = state.currentSongIndex - 1;
        endQue = false;
        playAlbum = true;
      }else{
        currentSongIndex = state.queLength - 1;
        endQue = true;
        playAlbum = false;
      }
      newState = Object.assign({}, state, {currentSongIndex: currentSongIndex, currentSongId: state.queOfSongs[currentSongIndex], endQue: endQue, playAlbum: playAlbum});
      return newState;
    case TOGGLE_PAUSE_PLAY:
      newState = Object.assign({}, state, {pause: !state.pause});
      return newState;
    case RECEIVE_QUE_LENGTH:
      newState = Object.assign({}, state, {queLength: action.queLength});
      return newState;
    case RECEIVE_CURRENT_USER:
      newState = Object.assign({}, state, preloadedState);
      //   {
      //   currentSongId: null,
      //   playAlbum: false,
      //   queOfSongs: [],
      //   currentSongIndex: 0,
      //   queLength: null,
      //   endQue: false,
      //   albumImg: null,
      //   visitingSongs: [],
      //   visitingQueLength: null
      // });
      return newState;

    default:
      return state;

  }
};

export default playerReducer;
