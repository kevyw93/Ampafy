class SearchesController < ApplicationController


  def search
    @search_albums = Album.where(title: params[:search_query])
    @search_songs = Song.where(title: params[:search_query])
    render json: 'api/searches/search'

  end

end
