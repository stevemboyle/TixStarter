class CreateTickets < ActiveRecord::Migration
  def change
    create_table :tickets do |t|
      t.integer :showtime_id
      t.string :tier
      t.text :description
      t.integer :price

      t.timestamps null: false
    end

    add_index :tickets, :showtime_id
  end
end
