json.playlist @playlists.each do |playlist|
  json.set! playlist.id do
    json.extract! playlist, :title, :id
  end
end
