class SupplierSerializer < ActiveModel::Serializer
  attributes :id, :name, :street_address, :city, :state, :zip_code, :phone_num, :email_add, :country
  has_many :products
end
