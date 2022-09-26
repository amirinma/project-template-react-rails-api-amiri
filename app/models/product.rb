class Product < ApplicationRecord
    belongs_to :supplier
    # belongs_to :vendor
    # belongs_to :customer
    has_many :vendor_products
    has_many :vendors, through: :vendor_products
    has_many :customer_products
    has_many :customers, through: :customer_products
end
