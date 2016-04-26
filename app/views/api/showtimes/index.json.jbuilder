json.array!(@showtimes) do |showtime|
  json.partial!('showtime', showtime: showtime)
end
