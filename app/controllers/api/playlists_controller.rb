class Api::PlaylistsController < ApplicationController

  def show
    @playlist = Playlist.find(params[:id])
  end

  def create
    @playlist = Playlist.new(playlist_params)
    if @playlist.save
      render :show
    else
      render json: ['A name is needed in order to save a playlist']
    end
  end

  def destroy
    @playlist = Playlist.find(params[:id])
    @playlist.destroy
    render :show
  end

  def index
    @playlists = Playlist.all
  end

  def update
    @playlist_tagging = PlaylistTagging.find_by({playlist_id: params[:playlist_id], song_id: params[:song_id]})
    if @playlist_tagging
      @playlist_tagging.destroy
      @playlist = Playlist.find(params[:playlist_id])
      render partial: '/api/playlists/playlist'
      # work on rendering something back to the front end so i can delete a single playlist
    else
      render json: ["Unable to delete"]
    end
    # @playlist = Playlist.find(params[:id])
    # if @playlist.update(playlist_params)
    #   render :show
    # else
    #   render json: ["You haven't put in the neccessary information"]
    # end
  end

  private

    def playlist_params
      params.require(:playlist).permit(:title, :user_id)
    end

end
