json.extract!(
  showtime,
    :id,
    :event_id,
    :date,
    :time,
    :location
)

json.tickets do
  json.array!(showtime.tickets) do |ticket|
    json.partial! 'api/tickets/ticket', ticket: ticket
  end
end
