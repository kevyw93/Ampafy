json.set! @playlist.id do
  json.extract! @playlist, :title, :id
end
json.songs do
  @playlist.songs.each do |song|
    json.set! song.id do
      json.extract! song, :id, :title
    end
  end
end
