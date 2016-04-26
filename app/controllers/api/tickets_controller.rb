class Api::TicketsController < ApplicationController
  def create
    @ticket = Ticket.new(ticket_params)

    if @ticket.save
      render :show
    else
      render json: @ticket.errors.full_messages, status: 422
    end
  end

  def destroy
    @ticket = Ticket.find(params[:id])
    @ticket.destroy
    render :show
  end

  def index
    @tickets = Ticket.all
  end

  def show
    @ticket = Ticket.find(params[:id])
  end

  private

  def ticket_params
    params.require(:ticket).permit(

    )
  end
end
