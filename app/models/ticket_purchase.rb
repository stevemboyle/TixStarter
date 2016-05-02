class TicketPurchase < ActiveRecord::Base

  belongs_to :user
  belongs_to :ticket

  has_one :showtime,
    through: :ticket,
    source: :showtime

  has_one :event,
    through: :showtime,
    source: :event

end
