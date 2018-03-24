export const RECEIVE_CURRENT_SONG = 'RECEIVE_CURRENT_SONG';
// export const RECEIVE_ALBUM_SONGS = 'RECEIVE_ALBUM_SONGS';
export const RECEIVE_QUE_LENGTH = 'RECEIVE_QUE_LENGTH';

export const INCREMENT_CURRENT_SONG_INDEX = 'INCREMENT_CURRENT_SONG_INDEX';

export const receiveCurrentSong = (songId) => {
  return {
    type: RECEIVE_CURRENT_SONG,
    songId
  };
};

export const incrementCurrentSongIndex = () => {
  return {
    type: INCREMENT_CURRENT_SONG_INDEX
  };
};
