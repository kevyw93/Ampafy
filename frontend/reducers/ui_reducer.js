import { RECEIVE_PLAY, RECEIVE_STOP, RECEIVE_PAUSE,
  RECEIVE_SONG_ID, RECEIVE_LISTS_PLAYLIST, SAME_THREE_DOTS}
  // DIFFERENT_THREE_DOTS}
  from '../actions/ui_actions';


const initialState = {
  id: null,
  openListPlaylist: false,
  status: 'stopped',
  toggleThreeDots: false
};

const uiReducer = (state = initialState, action) => {
  let newState;
  switch (action.type) {
    case RECEIVE_SONG_ID:
      newState = Object.assign({}, state, {id: action.songId});
      return newState;
    case RECEIVE_LISTS_PLAYLIST:
      newState = Object.assign({}, state, {openListPlaylist: !state.openListPlaylist});
      return newState;
    case RECEIVE_PLAY:
      newState = Object.assign({}, state, {status: 'playing'});
      return newState;
    case RECEIVE_STOP:
      newState = Object.assign({}, state, {status: 'stopped'});
      return newState;
    case RECEIVE_PAUSE:
      newState = Object.assign({}, state, {status: 'paused'});
      return newState;

    default:
      return state;

  }
};
export default uiReducer;
