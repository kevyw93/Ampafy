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
    type: 'delete',
    url: `api/playlists/${data.id}`,
    data: data
  });
};

export const fetchPlaylist = (id) => {
  return $.ajax({
    type: 'get',
    url: `api/playlists/${id}`
  });
};

export const fetchAllPlaylist = () => {
  return $.ajax({
    type: 'get',
    url: `api/playlists`
  });
};
