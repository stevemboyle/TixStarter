json.array!(@ticket_purchases) do |ticket_purchase|
  json.partial!('ticket_purchase', ticket_purchase: ticket_purchase)
end
