export const RECEIVE_CURRENT_SONG = 'RECEIVE_CURRENT_SONG';

export const receiveCurrentSong = (song) => {
  return {
    type: RECEIVE_CURRENT_SONG,
    song
  };
};
