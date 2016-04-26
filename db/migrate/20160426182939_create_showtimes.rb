class CreateShowtimes < ActiveRecord::Migration
  def change
    create_table :showtimes do |t|
      t.integer :event_id
      t.date :date
      t.time :time
      t.string :location

      t.timestamps null: false
    end
      add_index :showtimes, :event_id
  end
end
