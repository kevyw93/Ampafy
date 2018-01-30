export const search = (search_query) => {
  return $.ajax({
    type: 'get',
    url: 'api/searches',
    data: search_query
  });
};
