class Fixing < ActiveRecord::Migration[5.1]
  def change
    remove_column :playlists, :song_file_name
    remove_column :playlists, :song_content_type
    remove_column :playlists, :song_file_size
    remove_column :playlists, :song_updated_at
  end
end
