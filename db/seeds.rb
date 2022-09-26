# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
# Cheese.create!(name: /home/amirinma/Developments/codes/Phase-4/project-template-react-rails-api/db/migrate"ABC", price: 3)
Product.destroy_all
Supplier.destroy_all
Vendor.destroy_all
Customer.destroy_all
Vendor.create!(name: "HighTech Cybersecurity Technology", city: "Aushburn", state: "Virginia", country: "United States")
Vendor.create!(name: "EasyConnet", city: "Baltimore", state: "Maryland", country: "United States")
Customer.create!(name: "Zia", country: "United States")
Customer.create!(name: "Tom", country: "United States")
Supplier.create!(name: 'BitDefender Cyber Technology', country: 'Romania')
Supplier.create!(name: 'Kaspersky Lab', country: 'Russia')
Supplier.create!(name: 'McAfee Corp', country: 'United States')
Product.create!(name:"BD Antivirus", user: 1, price: 15, supplier_id: Supplier.first.id)
Product.create!(name:"BD Interet Security", user: 1, price: 20, supplier_id: Supplier.first.id)
Product.create!(name:"BD Total Security", user: 1, price: 25, supplier_id: Supplier.first.id)