class CreateTicketPurchases < ActiveRecord::Migration
  def change
    create_table :ticket_purchases do |t|
      t.integer :ticket_id
      t.integer :user_id
    end
    
    add_index :ticket_purchases, :ticket_id
    add_index :ticket_purchases, :user_id
  end
end
