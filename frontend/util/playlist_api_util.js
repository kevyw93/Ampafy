export const createPlaylist = (data) => {

  return $.ajax({
    type: 'post',
    url: 'api/playlists',
    data: data
  });
};

export const deletePlaylist = (id) => {
  return $.ajax({
    type: 'delete',
    url: `api/playlists/${id}`
  });
};

export const updatePlaylist = (data) => {

  return $.ajax({
    type: 'patch',
    url: `api/playlists/${data.playlist_id}`,
    data: data
  });
};

export const fetchPlaylist = (id) => {
  return $.ajax({
    type: 'get',
    url: `api/playlists/${id}`
  });
};

export const fetchAllPlaylist = (userId) => {
  return $.ajax({
    type: 'get',
    url: `api/playlists`,
    data: userId
  });
};
