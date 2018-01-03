class Album < ApplicationRecord
  validates :title, :author, presence: true
  
  has_many :songs

end
