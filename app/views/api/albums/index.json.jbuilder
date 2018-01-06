
  @albums.each do |album|
    json.set! album.id do
      json.album_img album.album_cover.url
      json.title album.title
      json.songs album.song_ids
    end
  end
