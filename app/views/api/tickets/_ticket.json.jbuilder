json.extract!(
  ticket,
    :id,
    :showtime_id,
    :tier,
    :description,
    :price
)

json.ticket_purchases do
  json.array!(ticket.ticket_purchases) do |ticket_purchase|
    json.partial! 'api/ticket_purchases/ticket_purchase', ticket_purchase: ticket_purchase
  end
end
