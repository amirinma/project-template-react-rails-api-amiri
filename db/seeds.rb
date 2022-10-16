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
Supplier.create!(name: 'BitDefender Cyber Technology', street_address:"Șoseaua Orhideelor 15A", city: "București", state: "Bucuresti", zip_code: 7000, phone_num:"+40 21 300 1226", email_add:"sales@bitdefender.com", country: 'Romania', sup_balance: 0)
Supplier.create!(name: 'Kaspersky Lab', street_address:"2 Kingdom Street", city:"Moscow", state:"Moscow", zip_code:27000, phone_num:"+1-866-328-5700", email_add: "info@kaspersky.com", country: 'Russia', sup_balance: 0)
Supplier.create!(name: 'McAfee Corp', street_address:"2821 Mission College Blvd", city:"Santa Clara", state:"California", zip_code:"95054", phone_num:"+1-888-847-8766", email_add:"info@macafee.com", country: 'United States', sup_balance: 0)
Product.create!(name:"BD Antivirus", quantity: 1, price: 15, supplier_id: Supplier.first.id, bill_num: "BD-123", total: 15)
Product.create!(name:"BD Interet Security", quantity: 1, price: 20, supplier_id: Supplier.first.id, bill_num: "BD-124", total: 20)
Product.create!(name:"BD Total Security", quantity: 2, price: 25, supplier_id: Supplier.first.id, bill_num: "BD-125", total: 50)