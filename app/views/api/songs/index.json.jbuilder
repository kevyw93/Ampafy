
  @songs.each do |song|
    json.set! song.id do
      json.extract! song, :id, :title
      json.author song.album.author
      json.audioUrl song.audio.url
    end
  end
