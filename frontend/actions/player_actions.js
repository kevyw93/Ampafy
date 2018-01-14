export const RECEIVE_CURRENT_SONG = 'RECEIVE_CURRENT_SONG';
export const RECEIVE_ALBUM_SONGS = 'RECEIVE_ALBUM_SONGS';

export const receiveCurrentSong = (songId) => {
  return {
    type: RECEIVE_CURRENT_SONG,
    songId
  };
};


export const receiveAlbumPlaylist = (songIds) => {
  return {
    type: RECEIVE_ALBUM_SONGS,
    songIds
  };
};
