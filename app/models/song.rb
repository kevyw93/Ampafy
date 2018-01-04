class Song < ApplicationRecord
  has_attached_file :audio
  validates :title, :album_id, presence: true
  validates_attachment :audio, presence: true,
    content_type: { content_type: 'audio'}
  belongs_to :album
end
