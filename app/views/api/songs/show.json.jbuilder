json.extract! @song, :id, :title
json.audioUrl @song.audio.url
json.albumImg @song.album.album_cover.url
json.albumId @song.album.id
