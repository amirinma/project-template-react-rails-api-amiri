class SupplierSerializer < ActiveModel::Serializer
  attributes :id, :name, :street_address, :city, :state, :zip_code, :phone_num, :email_add, :country, :sup_balance
  has_many :products
end
