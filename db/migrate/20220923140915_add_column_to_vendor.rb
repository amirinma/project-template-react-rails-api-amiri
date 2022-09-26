class AddColumnToVendor < ActiveRecord::Migration[6.1]
  def change
    add_column :vendors, :city, :string
    add_column :vendors, :state, :string
    add_column :vendors, :country, :string
  end
end
