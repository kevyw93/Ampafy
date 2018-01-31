import * as searchUtil from "../util/search_api_util";
export const RECEIVE_SEARCH = 'RECEIVE_SEARCH';
export const RECEIVE_SEARCH_ITEM = 'RECEIVE_SEARCH_ITEM';

export const receiveSearchBool = () => {
  return {
    type: RECEIVE_SEARCH
  };
};

export const receiveSearchPayload = (payload) => {
  return {
    type: RECEIVE_SEARCH_ITEM,
    songs: payload.songs,
    albums: payload.albums
  };
};


export const searchDatabase = (title) => {
  return dispatch => {
    return searchUtil.search(title).then(
      (payload) => dispatch(receiveSearchPayload(payload))
    );
  };
};
