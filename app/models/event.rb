class Event < ActiveRecord::Base

  has_many :showtimes
  has_many :tickets,
    through: :showtimes,
    source: :tickets

end
