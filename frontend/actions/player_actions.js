export const RECEIVE_CURRENT_SONGS = 'RECEIVE_CURRENT_SONGS';

export const receiveCurrentSong = (songs) => {
  return {
    type: RECEIVE_CURRENT_SONGS,
    songs
  };
};
