class Api::PlaylistTaggingsController < ApplicationController

  def create
    debugger
    @playlist_tagging = PlaylistTagging.new(playlist_tagging_params)
    if @playlist_tagging.save(playlist_tagging_params)
      @playlist = Playlist.find(params[:playlist_tagging][:playlist_id])
      render partial: '/api/playlists/playlist'
    else
      render json: @playlist_tagging.errors.full_messages, status: 422
    end

  end

  def destroy
    @playlist_tagging = PlaylistTagging.find(params[:id])
    @playlist_tagging.destroy
  end



  private

    def playlist_tagging_params
      params.require(:playlist_tagging).permit(:playlist_id, :song_id)
    end

end
