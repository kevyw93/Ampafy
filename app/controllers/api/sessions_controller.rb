class Api::SessionsController < ApplicationController

  def create

    @user = User.find_by_credentials(params[:user][:username], params[:user][:password])

    errors = {}
    if params[:user][:username].empty?
      errors["username"] = "Username can not be blank"
    end
    if params[:user][:password].empty?
      errors["password"] = "Password can not be blank"
    end
    if @user.nil?
      errors['creds'] = "Invalid Username and Password combination"
    end
    if @user
      login(@user)
      render json: @user
    else
      render json: errors, status: 401
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
