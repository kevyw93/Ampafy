export const fetchSong = (id) => {

  return $.ajax({
    type: 'get',
    url: `api/songs/${id}`,
  });
};

export const fetchArraySongs = (songIds) => {
  let songs = [];
  for (var i = 0; i < songIds.length; i++) {

    songs.push($.ajax({
      type: 'get',
      url:`api/songs/${songIds[i]}`
    })
  );
  }
  return songs;

};
