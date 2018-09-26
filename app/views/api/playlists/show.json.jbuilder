json.playlist do
  json.set! @playlist.id do
    json.extract! @playlist, :title, :id
    json.songIds @playlist.song_ids
  end
end
json.songs do
  @playlist.songs.each do |song|
    json.set! song.id do
      json.extract! song, :id, :title
      json.audioUrl song.audio.url
      json.albumAuthor song.album.author
      json.albumTitle song.album.title
      json.albumImg song.album.album_cover.url
    end
  end
end
