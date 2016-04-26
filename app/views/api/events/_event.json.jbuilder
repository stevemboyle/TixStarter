json.extract!(
  event,
    :id,
    :title,
    :catchphrase,
    :description,
    :image_url,
    :video_url,
    :user_id,
    :revenue_goal,
    :revenue_status
)

if show_showtimes
  json.showtimes do
    json.array!(event.showtimes) do |showtime|
      json.partial! 'api/showtimes/showtime', showtime: showtime
    end
  end
end
