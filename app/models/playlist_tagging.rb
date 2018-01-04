class PlaylistTagging < ApplicationRecord
  validates :song_id, :playlist_id, presence: true

  belongs_to :playlist
  belongs_to :song

end
