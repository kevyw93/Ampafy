export const RECEIVE_SONG = 'RECEIVE_SONG';
export const RECEIVE_ALL_SONGS= 'RECEIVE_ALL_SONGS';
import * as ApiUtil from "../util/song_api_util";


const receiveSong = (song) => {
  return {
    type: RECEIVE_SONG,
    song
  };
};
const receiveAllSong = (songs) => {
  return {
    type: RECEIVE_ALL_SONGS,
    songs
  };
};

export const fetchSong = (id) => {

  return dispatch => {
    return ApiUtil.fetchSong(id).then(
      song => dispatch(receiveSong(song))
    );
  };
};

export const fetchArraySongs = () => {
  return dispatch => {
    return ApiUtil.fetchSongs().then(

    );
  };
};
