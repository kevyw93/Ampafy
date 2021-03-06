export const fetchSong = (id) => {

  return $.ajax({
    type: 'get',
    url: `api/songs/${id}`,
  });
};

export const fetchAllSongs = () => {
  return $.ajax({
    type: 'get',
    url: 'api/songs'
  });
};

export const addSongToPlaylist = (post) => {
  return $.ajax({
    type: 'post',
    url: `api/playlist_taggings`,
    data: post
  });
};
