import {RECEIVE_ALL_ALBUMS, RECEIVE_ALBUM } from '../actions/album_actions';
import merge from 'lodash/merge';

const albumReducer = (state = {}, action) => {
  switch (action.type) {
    case RECEIVE_ALL_ALBUMS:
    debugger
      return action.albums;
    default:
      return state;

  }
};

export default albumReducer;
