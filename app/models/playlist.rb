class Playlist < ApplicationRecord
  validates :title, :user_id, presence: true

  has_many :songs
  belongs_to :user

end
