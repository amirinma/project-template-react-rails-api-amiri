class CreateVendorProducts < ActiveRecord::Migration[6.1]
  def change
    create_table :vendor_products do |t|
      t.references :vendor, null: false, foreign_key: true
      t.references :product, null: false, foreign_key: true

      t.timestamps
    end
  end
end
