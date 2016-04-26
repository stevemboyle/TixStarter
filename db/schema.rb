# encoding: UTF-8
# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20160426183508) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "events", force: :cascade do |t|
    t.string   "title"
    t.string   "catchphrase"
    t.text     "description"
    t.string   "image_url"
    t.string   "video_url"
    t.integer  "user_id"
    t.integer  "revenue_goal"
    t.integer  "revenue_status", default: 0
    t.datetime "created_at",                 null: false
    t.datetime "updated_at",                 null: false
  end

  create_table "showtimes", force: :cascade do |t|
    t.integer  "event_id"
    t.date     "date"
    t.time     "time"
    t.string   "location"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  add_index "showtimes", ["event_id"], name: "index_showtimes_on_event_id", using: :btree

  create_table "ticket_purchases", force: :cascade do |t|
    t.integer "ticket_id"
    t.integer "user_id"
  end

  add_index "ticket_purchases", ["ticket_id"], name: "index_ticket_purchases_on_ticket_id", using: :btree
  add_index "ticket_purchases", ["user_id"], name: "index_ticket_purchases_on_user_id", using: :btree

  create_table "tickets", force: :cascade do |t|
    t.integer  "showtime_id"
    t.string   "tier"
    t.text     "description"
    t.integer  "price"
    t.datetime "created_at",  null: false
    t.datetime "updated_at",  null: false
  end

  add_index "tickets", ["showtime_id"], name: "index_tickets_on_showtime_id", using: :btree

  create_table "users", force: :cascade do |t|
    t.string   "username",        null: false
    t.string   "password_digest", null: false
    t.string   "session_token",   null: false
    t.string   "first_name",      null: false
    t.string   "last_name",       null: false
    t.string   "bio_image_url"
    t.string   "bio_text"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  add_index "users", ["username"], name: "index_users_on_username", unique: true, using: :btree

end
