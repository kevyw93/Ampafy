export const getAllAlbums = () => {
  return $.ajax({
    type: 'get',
    url: 'api/albums'
  });
};

export const getAlbum = (id) => {
  debugger
  return $.ajax({
    type: 'get',
    url: `api/album/${id}`
  });
};

export const fetchSong = (id) => {
  return $.ajax({
    type: 'get',
    url: `api/songs/${id}`,
  });
};
