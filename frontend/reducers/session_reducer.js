import {RECEIVE_CURRENT_USER} from '../actions/session_actions';
import merge from 'lodash/merge';

const sessionReducer = (state = {currentUser: null}, action) => {
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
    
      return Object.assign({}, state, {currentUser: action.currentUser});
    default:
      return state;

  }
};

export default sessionReducer;
