
  @songs.each do |song|
    json.set! song.id do
      json.extract! song, :id, :title
      json.author song.album.author
      json.album song.album.title
      json.audioUrl song.audio.url
      json.albumId song.album.id
      json.albumImg song.album.album_cover.url
    end
  end
