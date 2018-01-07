import {RECEIVE_ALL_ALBUMS, RECEIVE_ALBUM } from '../actions/album_actions';
import merge from 'lodash/merge';

const albumReducer = (state = {}, action) => {
  switch (action.type) {
    case RECEIVE_ALL_ALBUMS:

      return action.albums;
    case RECEIVE_ALBUM:

      return Object.assign({}, state, action.album);
    default:

      return state;

  }
};

export default albumReducer;
