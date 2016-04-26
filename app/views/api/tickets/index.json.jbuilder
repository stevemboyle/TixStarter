json.array!(@tickets) do |ticket|
  json.partial!('ticket', ticket: ticket)
end
