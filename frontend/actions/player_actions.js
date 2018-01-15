export const RECEIVE_CURRENT_SONG = 'RECEIVE_CURRENT_SONG';
export const RECEIVE_ALBUM_SONGS = 'RECEIVE_ALBUM_SONGS';
export const RECEIVE_CURRENT_SONG_ID = 'RECEIVE_CURRENT_SONG_ID';
export const RECEIVE_QUE_LENGTH = 'RECEIVE_QUE_LENGTH';

export const receiveCurrentSong = (songId) => {
  return {
    type: RECEIVE_CURRENT_SONG,
    songId
  };
};


export const receiveAlbumSongs = (songs) => {
  return {
    type: RECEIVE_ALBUM_SONGS,
    songs
  };
};

export const receiveCurrentSongIndex = (songIndex) => {
  return {
    type: RECEIVE_CURRENT_SONG_ID,
    songIndex
  };
};

export const receiveQueLength = (queLength) => {
  return {
    type: RECEIVE_QUE_LENGTH,
    queLength
  };
};
