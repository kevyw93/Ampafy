class Song < ApplicationRecord
  validates :title, :album_id, presence: true

  belongs_to :album
end
