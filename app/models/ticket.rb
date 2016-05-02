class Ticket < ActiveRecord::Base

  belongs_to :showtime

  has_many :ticket_purchases

  has_many :purchasers,
    through: :ticket_purchases,
    source: :user


end
