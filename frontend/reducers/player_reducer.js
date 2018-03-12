import { RECEIVE_CURRENT_SONG,
  RECEIVE_ALBUM_SONGS,
  RECEIVE_QUE_LENGTH,
  INCREMENT_CURRENT_SONG_INDEX,
  }
  from '../actions/player_actions';
import { RECEIVE_ALBUM } from '../actions/album_actions';


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
};

const playerReducer = (state = preloadedState, action) => {
  let newState;
  switch (action.type) {
    case RECEIVE_CURRENT_SONG:
      // if (state.queOfSongs.length > 0) {
        // if (state.queOfSongs.includes(action.songId.toString())) {
          const newSongIndex = state.queOfSongs.indexOf(action.songId.toString());
          newState = Object.assign({}, state, {currentSongId: action.songId, playAlbum: true, currentSongIndex: newSongIndex});
        // }
      // }else{
      //   newState = Object.assign({}, state, {currentSongId: action.songId, playAlbum: true, currentSongIndex: 0});
      // }
      return newState;
    case RECEIVE_ALBUM:
      const queOfSongs = action.songs ? Object.keys(action.songs) : null;
      const queLength = queOfSongs ? queOfSongs.length : [];
      newState = Object.assign({}, state, {albumImg: Object.values(action.album)[0].albumImg, queOfSongs: queOfSongs,
        playAlbum:true, queLength: queLength});
      return newState;
    case INCREMENT_CURRENT_SONG_INDEX:
      let currentSongIndex;
      let endQue;
      let playAlbum;
      if (state.queLength && state.currentSongIndex + 1 < state.queLength) {
        currentSongIndex = state.currentSongIndex + 1;
        endQue = false;
        playAlbum = true;
      }else{
        currentSongIndex = 0;
        endQue = true;
        playAlbum = false;
        // newState = Object.assign({}, state, {endQue: true, currentSongIndex: currentSongIndex, playAlbum:false});
      }
      newState = Object.assign({}, state, {currentSongIndex: currentSongIndex, currentSongId: state.queOfSongs[currentSongIndex], endQue: endQue, playAlbum: playAlbum});
      return newState;
    case RECEIVE_QUE_LENGTH:
      newState = Object.assign({}, state, {queLength: action.queLength});
      return newState;
    default:
      return state;

  }
};

export default playerReducer;
