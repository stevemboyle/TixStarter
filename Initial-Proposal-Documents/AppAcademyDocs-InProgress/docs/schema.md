# Schema Information

## events
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
title           | string    | not null
catchphrase     | string    | not null
description     | text      | not null
image_url       | string    | not null
video_url       | string    | not null
user_id         | integer   | not null
revenue_goal    | integer   | not null
revenue_status  | integer   | not null, default: 0

## showtimes
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
event_id        | integer   | not null. foreign_key, indexed
date            | date      | not null
time            | time      | not null
location        | string    | not null

## tickets
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
showtime_id     | integer   | not null, foreign_key, indexed
tier            | string    | not null
description     | text      |
cost            | integer   | not null

## ticket_purchases
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
user_id         | integer   | not null, foreign key, indexed
ticket_id       | integer   | not null, foreign key, indexed

## users
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
username        | string    | not null, indexed, unique
password_digest | string    | not null
session_token   | string    | not null, indexed, unique
first_name      | string    | not null
last_name       | string    | not null
bio_image_url   | string    |
bio_text        | text      |
