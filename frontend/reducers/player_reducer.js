import { RECEIVE_CURRENT_SONGS }from '../actions/player_actions';

const playerReducer = (state, action) => {
  switch (action.type) {
    case action.type:
     return Object.assign({}, state, action.songs);
    default:
      return state;

  }
};

export default playerReducer;
