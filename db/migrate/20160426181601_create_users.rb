class CreateUsers < ActiveRecord::Migration
  def change
    create_table :users do |t|
      t.string :username, null: false
      t.string :password_digest, null: false
      t.string :session_token, null: false
      t.string :first_name, null: false
      t.string :last_name, null: false
      t.string :bio_image_url
      t.string :bio_text

      t.timestamps
    end

    add_index :users, :username, unique: true
  end
end
