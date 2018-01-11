json.album do
  json.set! @album.id do
    json.extract! @album, :title, :author, :id
    json.albumImg @album.album_cover.url
    json.songIds @album.song_ids
  end
end
json.songs do
  @album.songs.each do |song|
    json.set! song.id do
      json.extract! song, :id, :title
      json.audioUrl song.audio.url
      json.albumId song.album.id
      json.albumImg song.album.album_cover.url
    end
  end
end
