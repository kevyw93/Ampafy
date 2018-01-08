class Song < ApplicationRecord
  has_attached_file :audio
  validates_attachment :audio, presence: true,
  content_type: { content_type: ['audio/mp3', 'audio/mpeg', 'application/mp3', 'application/x-mp3']},
  size: { in: 0..50.megabytes }
  validates :title, :album_id, presence: true

  has_many :playlists
  belongs_to :album
end
