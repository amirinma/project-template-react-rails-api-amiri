class AddCollumnToSupplier < ActiveRecord::Migration[6.1]
  def change
    add_column :suppliers, :country, :string
  end
end
