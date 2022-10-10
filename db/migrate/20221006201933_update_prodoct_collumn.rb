class UpdateProdoctCollumn < ActiveRecord::Migration[6.1]
  def change 
    rename_column :products, :user, :quantity
  end
end
