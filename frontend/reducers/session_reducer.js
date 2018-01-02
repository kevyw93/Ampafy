import {RECEIVE_CURRENT_USER} from '../actions/session_action';
import merge from 'lodash/merge';

const SessionReducer = (state = {currentUser: null}, action) => {
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      return Object.assign({}, state, {currentUser: action.currentUser});
    default:
      return state;

  }
};

export default SessionReducer;
