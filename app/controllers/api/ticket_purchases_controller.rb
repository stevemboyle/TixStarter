class Api::TicketPurchasesController < ApplicationController
  def create

    @ticket_purchase = TicketPurchase.new(ticket_purchase_params)

    if @ticket_purchase.save
      render :show
    else
      render json: @ticket_purchase.errors.full_messages, status: 422
    end
  end

  def destroy
    @ticket_purchase = TicketPurchase.find(params[:id])
    @ticket_purchase.destroy
    render :show
  end

  def update
    @ticket_purchase = TicketPurchase.find(params[:id])

    if @ticket_purchase.update(ticket_purchase_params)
      render :show
    else
      render json: @ticket_purchase.errors.full_messages, status: 422
    end
  end

  def index
    @ticket_purchases = TicketPurchase.all
  end

  def show
    @ticket_purchase = TicketPurchase.find(params[:id])
  end

  private

  def ticket_purchase_params
    params.require(:ticket_purchase).permit(:user_id, :ticket_id)
  end
end
