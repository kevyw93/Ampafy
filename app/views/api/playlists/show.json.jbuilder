json.extract! @playlist, :title, :id
json.songs do
  @playlist.songs.each do |song|
    json.set! song.id do
      json.extract! song, :id, :title
    end
  end
end