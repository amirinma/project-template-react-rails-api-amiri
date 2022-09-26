class Vendor < ApplicationRecord
    has_many :supplier_vendors
    has_many :suppliers, through: :supplier_vendors
    has_many :vendor_products
    has_many :products, through: :vendor_products
    
end
