json.playlist @playlists.each do |playlist|
  json.extract! playlist, :title, :id, :user_id
  json.songs playlist.song_ids
end