json.extract! @album, :title, :author, :id
json.songs @album.songs.each do |song|
  json.extract! song, :id, :title
  json.audio_url song.audio.url
  # debugger
end
json.album_img @album.album_cover.url
