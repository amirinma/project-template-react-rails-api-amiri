class CreateSuppliers < ActiveRecord::Migration[6.1]
  def change
    create_table :suppliers do |t|
      t.string :name
      t.string :street_address
      t.string :city
      t.string :state
      t.string :zip_code
      t.string :phone_num
      t.string :email_add
      t.float :sup_balance, :default => 0

      t.timestamps
    end
  end
end

# add_column :suppliers, :street_address, :string
#     add_column :suppliers, :city, :string
#     add_column :suppliers, :state, :string
#     add_column :suppliers, :zip_code, :integer
#     add_column :suppliers, :country, :string
#     add_column :suppliers, :phone_num, :string
#     add_column :suppliers, :email_add, :string
