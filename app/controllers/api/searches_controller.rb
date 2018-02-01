class Api::SearchesController < ApplicationController


  def search
    @search_albums = Album.where("title LIKE ?", "%#{params[:search_query]}%")
    @search_songs = Song.where("title LIKE ?", "%#{params[:search_query]}%")
    render 'api/searches/search'

  end

end
