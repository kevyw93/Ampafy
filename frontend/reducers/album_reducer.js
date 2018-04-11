import {RECEIVE_ALL_ALBUMS, RECEIVE_ALBUM } from '../actions/album_actions';
import {RECEIVE_SEARCH_ITEM} from '../actions/search_actions';
import merge from 'lodash/merge';

const preloadedState = {
  albums: null,
};

const albumReducer = (state = {}, action) => {
  let newState;
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_ALL_ALBUMS:
      newState = Object.assign({}, state, action.albums);
      return newState;
    case RECEIVE_ALBUM:
      return Object.assign({}, state, action.album);
    case RECEIVE_SEARCH_ITEM:
      return Object.assign({}, state, action.album);
    default:

      return state;

  }
};

export default albumReducer;
