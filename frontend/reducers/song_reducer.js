import {RECEIVE_SONG, RECEIVE_SONGS} from '../actions/song_actions';

const songReducer = (state = {}, action) => {
  switch (action.type) {
    case RECEIVE_SONG:
      return action.entities.song;
    default:
      return state;

  }
};

export default songReducer;
