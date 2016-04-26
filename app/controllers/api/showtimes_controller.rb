class Api::ShowtimesController < ApplicationController
  def create
    @showtime = Showtime.new(showtime_params)

    if @showtime.save
      render :show
    else
      render json: @showtime.errors.full_messages, status: 422
    end
  end

  def destroy
    @showtime = Showtime.find(params[:id])
    @showtime.destroy
    render :show
  end

  def index
    @showtimes = Showtime.all
  end

  def show
    @showtime = Showtime.find(params[:id])
  end

  private

  def showtime_params
    params.require(:showtime).permit(

    )
  end
end
