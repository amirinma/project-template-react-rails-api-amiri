class Supplier < ApplicationRecord
    # validates :country, presence: true
    
    has_many :supplier_vendors
    has_many :vendors, through: :supplier_vendors
    has_many :products
    # validates :name, presence: true
    validates_uniqueness_of :name
    validates :country, presence: true
    
    validates_associated :products, :supplier_vendors, :vendors 
end
