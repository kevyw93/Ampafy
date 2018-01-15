export const RECEIVE_MODAL = 'RECEIVE_MODAL';
export const RECEIVE_SONG_ID = 'RECEIVE_SONG_ID';
export const RECEIVE_LISTS_PLAYLIST = 'RECEIVE_LISTS_PLAYLIST';
export const RECEIVE_PLAY = 'RECEIVE_PLAY';
export const RECEIVE_PAUSE = 'RECEIVE_PAUSE';
export const RECEIVE_STOP = 'RECEIVE_STOP';

export const receiveModalSong = () => {
  return {
    type: RECEIVE_MODAL,

  };
};

export const receiveSongId = (songId) => {
  return {
    type: RECEIVE_SONG_ID,
    songId
  };
};


export const receiveListsPlaylist = () => {
  return {
    type: RECEIVE_LISTS_PLAYLIST
  };
};

export const receivePlay = () => {
  return {
    type: RECEIVE_PLAY,
  };
};

export const receivePause = () => {
  return {
    type: RECEIVE_PAUSE,
  };
};

export const receiveStop = () => {
  return {
    type: RECEIVE_STOP,
  };
};
