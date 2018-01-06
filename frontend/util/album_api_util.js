export const getAllAlbums = (data) => {
  return $.ajax({
    type: 'get',
    url: 'api/albums',
    data
  });
};

export const fetchSong = (id) => {
  return $.ajax({
    type: 'get'
  });
};
