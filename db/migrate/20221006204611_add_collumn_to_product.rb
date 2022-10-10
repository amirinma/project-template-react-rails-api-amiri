class AddCollumnToProduct < ActiveRecord::Migration[6.1]
  def change
    add_column :products, :bill_num, :string
    add_column :products, :total, :float
  end
end
