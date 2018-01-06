export const getAllAlbums = (data) => {
  return $.ajax({
    type: 'get',
    url: 'api/albums',
    data
  });
};
