class Api::PlaylistTaggingsController < ApplicationController

  def create
    @playlist_tagging = PlaylistTagging.new(playlist_taggings_params)
    @playlist_tagging.save(playlist_taggings_params)
  end

  def destroy
    @playlist_tagging = PlaylistTagging.find(params[:id])
    @playlist_tagging.destroy
  end

  private

    def playlist_taggings_params
      params.require(:playlist_tagging).permit(:playlist_id, :song_id)
    end

end
