class SearchesController < ApplicationController


  def show
    @album = Album.find_by(:title)
    @song = Song.find_by(:title)
    if @album
      render json: 'api/albums/show'
    elsif @song
      render json: 'api/songs/show'
    else
      render json: ['No search Found']
    end
  end

end
