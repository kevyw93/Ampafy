export const search = (searchQuery) => {
  return $.ajax({
    type: 'get',
    url: 'api/searches',
    data: searchQuery
  });
};
