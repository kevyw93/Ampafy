export const RECEIVE_CURRENT_SONG = 'RECEIVE_CURRENT_SONG';
export const RECEIVE_QUE_LENGTH = 'RECEIVE_QUE_LENGTH';

export const INCREMENT_CURRENT_SONG_INDEX = 'INCREMENT_CURRENT_SONG_INDEX';
export const DECREMENT_CURRENT_SONG_INDEX = 'DECREMENT_CURRENT_SONG_INDEX';
export const TOGGLE_PAUSE_PLAY = 'TOGGLE_PAUSE_PLAY';

export const receiveCurrentSong = (payload) => {

  return {
    type: RECEIVE_CURRENT_SONG,
    songId: payload.songId,
    albumImg: payload.albumImg
  };
};

export const incrementCurrentSongIndex = () => {
  return {
    type: INCREMENT_CURRENT_SONG_INDEX
  };
};

export const decrementCurrentSongIndex = () => {
  return {
    type: DECREMENT_CURRENT_SONG_INDEX
  };
};

export const togglePausePlay = () => {
  return {
    type: TOGGLE_PAUSE_PLAY
  };
};
