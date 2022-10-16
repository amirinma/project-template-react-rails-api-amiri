class ProductSerializer < ActiveModel::Serializer
  attributes :id, :name, :quantity, :price, :total, :bill_num, :date, :pro_category, :av_quantity
  belongs_to :supplier
  
end
