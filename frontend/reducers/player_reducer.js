import { RECEIVE_CURRENT_SONG }from '../actions/player_actions';
import { RECEIVE_ALBUM, RECEIVE_ALBUM_SONGS }from '../actions/album_actions';
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
  queOfSongs: null
};

const playerReducer = (state = preloadedState, action) => {
  let newState;
  switch (action.type) {
    case RECEIVE_CURRENT_SONG:
      newState = Object.assign({}, state, {currentSongId: action.songId});
      return newState;
    case RECEIVE_ALBUM_SONGS:
      newState = Object.assign({}, state, {queOfSongs: action.songIds});
      return newState;
      // return Object.values(action.songs).sort((a,b) => spaceship(a.id, b.id));

    default:
      return state;

  }
};

export default playerReducer;
