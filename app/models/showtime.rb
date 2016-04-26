class Showtime < ActiveRecord::Base

  belongs_to :event
  has_many :tickets

end
