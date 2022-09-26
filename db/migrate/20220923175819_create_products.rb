class CreateProducts < ActiveRecord::Migration[6.1]
  def change
    create_table :products do |t|
      t.string :name
      t.integer :user
      t.float :price
      t.references :supplier, null: false, foreign_key: true
      # t.references :vendor, null: true, foreign_key: true
      # t.references :customer, null: true, foreign_key: true

      t.timestamps
    end
  end
end
