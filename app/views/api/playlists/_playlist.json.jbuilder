json.playlist do
  json.set! @playlist.id do
    json.extract! @playlist, :id, :title
    json.songIds @playlist.song_ids
  end
end
