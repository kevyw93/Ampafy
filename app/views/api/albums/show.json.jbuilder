json.extract! @album, :title, :author, :id
json.songs @album.song_ids
