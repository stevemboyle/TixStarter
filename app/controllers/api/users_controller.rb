class Api::UsersController < ApplicationController

	def create
		#TODO: I think there is an issue here.
		@user = User.new(user_params)
		if @user.save
			sign_in(@user)
			render "api/users/show"
		else
			@errors = @user.errors.full_messages
			render "api/shared/error", status: 422
		end
	end

	private

	def user_params
		params.require(:user).permit(:username, :password)
	end

end
#
# class Api::UsersController < ApplicationController
#   def new
#     @user = User.new
#   end
#
#   def create
#     @user = User.new(user_params)
#
#     if @user.save
#       sign_in(@user)
#       # redirect_to links_url
#     else
#       flash.now[:errors] = @user.errors.full_messages
#       render :new
#     end
#   end
#
#   private
#   def user_params
#     params.require(:user).permit(:password, :username)
#   end
# end
