class Album < ApplicationRecord
  has_attached_file :album_cover
  validates :title, :author, presence: true
  validates_attachment :album_cover, presence: true,
    content_type: { content_type: ["image/jpeg", "image/gif", "image/png"] },
    size: { in: 0..10.megabytes }

  has_many :songs
end
