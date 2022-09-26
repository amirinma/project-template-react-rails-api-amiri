class CreateSupplierVendors < ActiveRecord::Migration[6.1]
  def change
    create_table :supplier_vendors do |t|
      t.timestamps
      t.belongs_to :supplier
      t.belongs_to :vendor
    end
  end
end
