class AddAttachmentAlbumCoverToAlbums < ActiveRecord::Migration[4.2]
  def self.up
    change_table :albums do |t|
      t.attachment :album_cover
    end
  end

  def self.down
    remove_attachment :albums, :album_cover
  end
end
