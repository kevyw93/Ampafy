class Api::PlaylistsController < ApplicationController

  def show
    @playlist = Playlist.find(params[:id])
    render json: @playlist
  end

  def create
    @playlist = Playlist.new(playlist_params)
    if @playlist.save
      render json: @playlist
    else
      render json: ['A name is needed in order to save a playlist']
    end
  end

  def destroy
    @playlist = Playlist.find(params[:id])
    @playlist.destroy
  end

  def index
    @playlists = Playlist.all
    render json: @playlist
  end

  def update
    @playlist = Playlist.find(params[:id])
    if @playlist.update(playlist_params)
      render json: @playlist
    else
      render json: ["You haven't put in the neccessary information"]
    end
  end

  private

    def playlist_params
      params.require(:playlist).permit(:title)
    end

end
