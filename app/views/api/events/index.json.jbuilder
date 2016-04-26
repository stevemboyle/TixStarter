json.array!(@events) do |event|
  json.partial!('event', event: event, show_showtimes: false)
end
