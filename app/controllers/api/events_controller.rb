class Api::EventsController < ApplicationController
  def create
    @event = Event.new(event_params)

    if @event.save
      render :show
    else
      render json: @event.errors.full_messages, status: 422
    end
  end

  def destroy
    @event = Event.find(params[:id])
    @event.destroy
    render :show
  end

  def update
    @event = Event.find(params[:id])

    if @event.update(event_params)
      render :show
    else
      render json: @event.errors.full_messages, status: 422
    end
  end

  def index
    @events = Event.all
  end

  def show
    @event = Event.find(params[:id])
  end

  private

  def event_params
    params.require(:event).permit(:title,
                                  :catchphrase,
                                  :description,
                                  :image_url,
                                  :video_url,
                                  :user_id,
                                  :revenue_goal,
                                  :revenue_status
                                  )
  end
end
