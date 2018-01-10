json.playlists do
  @playlists.each do |playlist|
    json.set! playlist.id do
      json.extract! playlist, :title, :id, :user_id
      json.songIds playlist.song_ids
    end
  end
end
