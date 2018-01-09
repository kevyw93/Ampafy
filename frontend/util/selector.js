export const albumSongsSelector = (album, state) => {
    if (album.songIds) {
      
      return album.songIds.map(songId => {
        if (state.entities.songs[songId]) {
          return state.entities.songs[songId];
        }
      });
    }
};
