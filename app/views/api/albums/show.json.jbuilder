json.extract! @album, :title, :author, :id
json.songs @album.song_ids
json.album_img @album.album_cover.url
