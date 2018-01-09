export const RECEIVE_SONG = 'RECEIVE_SONG';
export const RECEIVE_SONGS= 'RECEIVE_SONGS';
import * as ApiUtil from "../util/album_api_util";


const receiveSong = (song) => {
  return {
    type: RECEIVE_SONG,
    song
  };
};

export const fetchSong = (id) => {

  return dispatch => {
    return ApiUtil.fetchSong(id).then(
      song => dispatch(receiveSong(song))
    );
  };
};
