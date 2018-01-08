class Playlist < ApplicationRecord
  validates :title, :user_id, presence: true
  has_many :playlist_taggings
  has_many :songs,
    through: :playlist_taggings, source: :song
  belongs_to :user

end
