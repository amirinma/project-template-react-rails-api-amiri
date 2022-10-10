class ProductSerializer < ActiveModel::Serializer
  attributes :id, :name, :quantity, :price, :total, :bill_num, :date
  belongs_to :supplier
  
end
