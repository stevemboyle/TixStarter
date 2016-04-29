class Showtime < ActiveRecord::Base

  belongs_to :event
  has_many :tickets

  has_one :user,
    through: :event,
    source: :user

end
