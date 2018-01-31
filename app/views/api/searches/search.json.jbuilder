json.albums do
  @search_albums.each do |album|
    json.set! album.id do
      json.album_img album.album_cover.url
      json.id album.id
      json.title album.title

    end
  end
end

json.songs do

  @search_songs.each do |song|
    json.set! song.id do
      json.extract! song, :id, :title
      json.author song.album.author
      json.album song.album.title
      json.audioUrl song.audio.url
      json.albumId song.album.id
    end
  end
end
