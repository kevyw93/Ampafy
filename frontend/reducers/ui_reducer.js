import {RECEIVE_MODAL} from '../actions/ui_actions';

const initialState = {
  isThreeDots: false
};

const uiReducer = (state = initialState, action) => {
  let newState;
  switch (action.type) {
    case RECEIVE_MODAL:
      newState = Object.assign({}, state, {isThreeDots: !state.isThreeDots});

      return newState;
    default:
      return state;

  }
};
export default uiReducer;
