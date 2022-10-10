class CreateCustomers < ActiveRecord::Migration[6.1]
  def change
    create_table :customers do |t|
      t.string :name
      t.string :street_address
      t.string :city
      t.string :state
      t.string :country
      t.string :zip_code
      t.string :phone_num
      t.string :email_add

      t.timestamps
    end
  end
end
