class Ticket < ActiveRecord::Base

  belongs_to :showtime

  has_many :ticket_purchases

  has_many :purchasers,
    through: :ticket_purchases,
    source: :user

  has_one :event,
    through: :showtime,
    source: :event

end
