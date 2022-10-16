class Product < ApplicationRecord
  
    belongs_to :supplier
    has_many :vendor_products
    has_many :vendors, through: :vendor_products
    has_many :customer_products
    has_many :customers, through: :customer_products

    validates :price, presence: true
    validates :name, presence: true
    validates_uniqueness_of :bill_num

end
