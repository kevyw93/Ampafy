class Api::SessionsController < ApplicationController

  def create
    @user = User.find_by_credentials(params[:user][:username], params[:user][:password])
    if @user
      login(@user)
      render json: @user
    else
      render json: ['Invalid creds']
    end
  end

  def destroy
    if logged_in?
      logout
      render json: {}
    else
      render json: ['Nobody signed In'], status: 404
    end
  end

end
