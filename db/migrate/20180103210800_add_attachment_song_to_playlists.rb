class AddAttachmentSongToPlaylists < ActiveRecord::Migration[4.2]
  def self.up
    change_table :playlists do |t|
      t.attachment :song
    end
  end

  def self.down
    remove_attachment :playlists, :song
  end
end
