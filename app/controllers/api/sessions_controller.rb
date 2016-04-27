class Api::SessionsController < ApplicationController
  def new
  end

  def index
  end

  def create
    user = User.find_by_credentials(
      params[:user][:username],
      params[:user][:password]
    )

    if user
      sign_in(user)
      # redirect_to links_url
    else
      # flash.now[:errors] = ["Invalid username or password"]
      # render :new
    end

    #TODO: If any auth errors arise (e.g. 'invalid credentials' or 'username already exists'), return those errors in your response with a corresponding error status.
  end

  def new
  end

  def show

    token = session[:session_token]
    @user = User.find_by({session_token: token})



    if @user
      # We're logged in
      response = { logged_in: true, username: @user.username }
      render json: response
    else
      # We're not logged in
    end

    #TODO: Sessions#show should return the current_user if she or he exists.
    #TODO: If any auth errors arise (e.g. 'invalid credentials' or 'username already exists'), return those errors in your response with a corresponding error status.
  end

  def destroy
    sign_out
    # redirect_to new_session_url
  end


end
