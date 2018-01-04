import merge from 'lodash/merge';
import {RECEIVE_ERRORS, RECEIVE_CURRENT_USER} from '../actions/session_actions';

const SessionErrorsReducer = (state= [], action) => {
  let newState;
  switch (action.type) {
    case RECEIVE_ERRORS:
      
      return action.errors;
    case RECEIVE_CURRENT_USER:
      return [];
    default:
      return state;
  }
};

export default SessionErrorsReducer;
