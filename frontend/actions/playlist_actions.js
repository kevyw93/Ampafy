export const RECEIVE_PLAYLIST = 'RECEIVE_PLAYLIST';
export const REMOVE_PLAYLIST = 'REMOVE_PLAYLIST';
export const RECEIVE_ALL_PLAYLISTS = 'RECEIVE_ALL_PLAYLISTS';
export const RECEIVE_PLAYIST_SONGS = 'RECEIVE_PLAYIST_SONGS';
export const REMOVE_SONG_FROM_PLAYLIST = 'REMOVE_SONG_FROM_PLAYLIST';
import * as PlaylistApiUtil from '../util/playlist_api_util';
import * as SongApiUtil from "../util/song_api_util";

export const receivePlaylist = (payload) => {

  return {
    type: RECEIVE_PLAYLIST,
    playlist: payload.playlist,
    songs: payload.songs,
  };
};

export const removePlaylist = (playlist) => {
  return {
    type: REMOVE_PLAYLIST,
    playlist
  };
};

export const receiveAllPlaylist = (playlists) => {

  return {
    type: RECEIVE_ALL_PLAYLISTS,
    playlists
  };
};

export const fetchPlaylistSongs = (songs) => {
  return {
    type: RECEIVE_PLAYIST_SONGS,
    songs
  };
};

export const removeSong = (payload) => {

  return {
    type: REMOVE_SONG_FROM_PLAYLIST,
    playlist: payload.playlist
  };
};


export const addSongToPlaylist = (post) => {
  return dispatch => {

    return SongApiUtil.addSongToPlaylist(post).then(
      (payload) => dispatch(receivePlaylist(payload))
    );
  };
};
export const removeSongFromPlaylist = (ids) => {
  return dispatch => {
    return PlaylistApiUtil.updatePlaylist(ids).then(
      (song) => dispatch(removeSong(song))
    );
  };
};


export const createPlaylist = playlist => {
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
    (payload) => dispatch(receivePlaylist(payload))
  );
};

export const fetchAllPlaylist = (userId) => dispatch => {
  return PlaylistApiUtil.fetchAllPlaylist(userId).then(
    (playlists) => dispatch(receiveAllPlaylist(playlists))
  );
};

export const deletePlaylist = (id) => dispatch => {
  return PlaylistApiUtil.deletePlaylist(id).then(
    (playlist) => dispatch(removePlaylist(playlist))
  );
};
