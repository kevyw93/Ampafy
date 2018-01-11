export const RECEIVE_MODAL = 'RECEIVE_MODAL';
export const RECEIVE_SONG_ID = 'RECEIVE_SONG_ID';
export const RECEIVE_LISTS_PLAYLIST= 'RECEIVE_LISTS_PLAYLIST';
export const RECEIVE_PLAYING= 'RECEIVE_PLAYING';
export const receiveModalSong = () => {
  return {
    type: RECEIVE_MODAL,
  };
};

export const receiveSongId = (id) => {
  return {
    type: RECEIVE_SONG_ID,
    id
  };
};


export const receiveListsPlaylist = () => {
  return {
    type: RECEIVE_LISTS_PLAYLIST
  };
};

export const receiveIsPlaying = () => {
  return {
    type: RECEIVE_PLAYING
  };
};
