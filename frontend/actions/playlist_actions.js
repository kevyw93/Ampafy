export const RECEIVE_PLAYLIST = 'RECEIVE_PLAYLIST';
export const REMOVE_PLAYLIST = 'REMOVE_PLAYLIST';
export const RECEIVE_ALL_PLAYLISTS = 'RECEIVE_ALL_PLAYLISTS';
import * as PlaylistApiUtil from '../util/playlist_api_util';

export const receivePlaylist = (playlist) => {
  return {
    type: RECEIVE_PLAYLIST,
    playlist
  };
};

export const removePlaylist = (playlist) => {
  return {
    type: REMOVE_PLAYLIST,
    playlist
  };
};

export const receiveAllPlaylist = (payload) => {
  return {
    type: RECEIVE_ALL_PLAYLISTS,
    playlists: payload.playlists
  };
};

export const createPlaylist = playlist => {
  debugger
  return dispatch => {
    return PlaylistApiUtil.createPlaylist(playlist).then(
      (newPlaylist) => dispatch(receivePlaylist(newPlaylist))
    );
  };

};

export const updatePlaylist = playlist => dispatch => {
  return PlaylistApiUtil.updatePlaylist(playlist).then(
    (newPlaylist) => dispatch(receivePlaylist(newPlaylist))
  );
};

export const fetchPlaylist = (id) => dispatch => {
  return PlaylistApiUtil.fetchPlaylist(id).then(
    (playlist) => dispatch(receivePlaylist(playlist))
  );
};

export const fetchAllPlaylist = () => dispatch => {
  return PlaylistApiUtil.fetchAllPlaylist().then(
    (playlists) => dispatch(receiveAllPlaylist(playlists))
  );
};

export const deletePlaylist = (id) => dispatch => {
  return PlaylistApiUtil.deletePlaylist(id).then(
    (playlist) => dispatch(removePlaylist(playlist))
  );
};
