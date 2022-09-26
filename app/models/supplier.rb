class Supplier < ApplicationRecord
    has_many :supplier_vendors
    has_many :vendors, through: :supplier_vendors
    has_many :products
end
