export const getAllAlbums = () => {
  return $.ajax({
    type: 'get',
    url: 'api/albums'
  });
};

export const getAlbum = (id) => {

  return $.ajax({
    type: 'get',
    url: `api/albums/${id}`
  });
};
