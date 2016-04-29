class Api::SessionsController < ApplicationController

  def index
  end

  def create
    user = User.find_by_credentials(
      params[:user][:username],
      params[:user][:password]
    )

    if user
      sign_in(user)
      response = { logged_in: true, username: user.username, first_name: user.first_name, last_name: user.last_name, id: user.id }
      render json: response
      # redirect_to links_url
    else

      # flash.now[:errors] = ["Invalid username or password"]
      # render :new
    end

    #TODO: If any auth errors arise (e.g. 'invalid credentials' or 'username already exists'), return those errors in your response with a corresponding error status.
  end

  def show
    token = session[:session_token]
    @user = User.find_by({session_token: token})



    if @user
      # We're logged in
      response = { logged_in: true, username: @user.username, first_name: @user.first_name, last_name: @user.last_name, id: @user.id }
      render json: response
    else
      # We're not logged in
    end

    #TODO: Sessions#show should return the current_user if she or he exists.
    #TODO: If any auth errors arise (e.g. 'invalid credentials' or 'username already exists'), return those errors in your response with a corresponding error status.
  end

  def destroy
    @user = current_user
    sign_out
    render :show
    # redirect_to new_session_url
  end

  def user_params
		params.require(:user).permit(:username, :password)
	end


end
