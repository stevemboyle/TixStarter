class CreateEvents < ActiveRecord::Migration
  def change
    create_table :events do |t|
      t.string :title
      t.string :catchphrase
      t.text :description
      t.string :image_url
      t.string :video_url
      t.integer :user_id
      t.integer :revenue_goal
      t.integer :revenue_status, default: 0

      t.timestamps null: false
    end
  end
end


#TODO: Add index
#TODO: Add deadline
