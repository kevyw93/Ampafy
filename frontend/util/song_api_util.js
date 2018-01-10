export const fetchSong = (id) => {

  return $.ajax({
    type: 'get',
    url: `api/songs/${id}`,
  });
};

export const addSongToPlaylist = (post) => {
  return $.ajax({
    type: 'post',
    url: `api/playlist_taggings`,
    data: post
  });
};
export const deleteSongFromPlaylist = (post) => {
  return $.ajax({
    type: 'post',
    url: `api/playlist_taggings/${post.id}`,
  });
};
