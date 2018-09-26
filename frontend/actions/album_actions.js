export const RECEIVE_ALBUM = 'RECEIVE_ALBUM';
export const RECEIVE_PLAYER_ALBUM = 'RECEIVE_PLAYER_ALBUM';
export const VISIT_PLAYER_ALBUM = 'VISIT_PLAYER_ALBUM';
export const PLAY_ALBUM = 'PLAY_ALBUM';
export const RECEIVE_ALL_ALBUMS = 'RECEIVE_ALL_ALBUMS';
export const TURN_PLAY_ALBUM_OFF = 'TURN_PLAY_ALBUM_OFF';
import * as ApiUtil from "../util/album_api_util";

export const receiveAllAlbums = (albums) => {
  return {
    type: RECEIVE_ALL_ALBUMS,
    albums
  };
};
export const receiveAlbum = (payload) => {
  return {
    type: RECEIVE_ALBUM,
    album: payload.album,
    songs: payload.songs
  };
};

export const receivePlayerAlbum = (payload) => {
  return {
    type: RECEIVE_PLAYER_ALBUM,
    album: payload.album,
    songs: payload.songs
  };
};


export const receiveVisitPlayerAlbum = (payload) => {
  return {
    type: VISIT_PLAYER_ALBUM,
    album: payload.album,
    songs: payload.songs
  };
};

export const playAlbum = () => {
  return {
    type: PLAY_ALBUM,
  };
};

export const turnOffPlayAlbum = () => {
  return {
    type: TURN_PLAY_ALBUM_OFF
  };
};


export const getAllAlbums = () => {
  return dispatch => {
    return ApiUtil.getAllAlbums().then(
      (albums) => dispatch(receiveAllAlbums(albums))
    );
  };
};

export const getAlbum = (id) => {
  return dispatch => {
    return ApiUtil.getAlbum(id).then(
      (payload) => dispatch(receiveAlbum(payload))
    );
  };
};

export const getPlayerAlbum = (id) => {
  return dispatch => {
    return ApiUtil.getAlbum(id).then(
      (payload) => dispatch(receivePlayerAlbum(payload))
    );
  };
};

export const visitPlayerAlbum = (id) => {
  return dispatch => {
    return ApiUtil.getAlbum(id).then(
      (payload) => dispatch(receiveVisitPlayerAlbum(payload))
    );
  };
};
