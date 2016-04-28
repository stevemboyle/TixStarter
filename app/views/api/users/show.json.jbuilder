# json.extract! @user, :username

json.extract!(
  @user,
    :id,
    :username
    :first_name
    :last_name,
    :bio_image_url,
    :bio_text
)
