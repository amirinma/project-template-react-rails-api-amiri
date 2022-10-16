class AddColumnToProduct < ActiveRecord::Migration[6.1]
  def change
    add_column :products, :av_quantity, :integer, :default => 0
    add_column :products, :in_quantity, :integer, :default => 0
    add_column :products, :to_quantity, :integer, :default => 0
    add_column :products, :pro_category, :string
  end
end
