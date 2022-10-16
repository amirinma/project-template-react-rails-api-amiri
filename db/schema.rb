# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2022_10_16_004827) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "customer_products", force: :cascade do |t|
    t.bigint "customer_id", null: false
    t.bigint "product_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["customer_id"], name: "index_customer_products_on_customer_id"
    t.index ["product_id"], name: "index_customer_products_on_product_id"
  end

  create_table "customers", force: :cascade do |t|
    t.string "name"
    t.string "street_address"
    t.string "city"
    t.string "state"
    t.string "country"
    t.string "zip_code"
    t.string "phone_num"
    t.string "email_add"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "products", force: :cascade do |t|
    t.date "date"
    t.string "name"
    t.integer "quantity"
    t.float "price"
    t.bigint "supplier_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.string "bill_num"
    t.float "total"
    t.integer "av_quantity", default: 0
    t.integer "in_quantity", default: 0
    t.integer "to_quantity", default: 0
    t.string "pro_category"
    t.index ["supplier_id"], name: "index_products_on_supplier_id"
  end

  create_table "supplier_vendors", force: :cascade do |t|
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.bigint "supplier_id"
    t.bigint "vendor_id"
    t.index ["supplier_id"], name: "index_supplier_vendors_on_supplier_id"
    t.index ["vendor_id"], name: "index_supplier_vendors_on_vendor_id"
  end

  create_table "suppliers", force: :cascade do |t|
    t.string "name"
    t.string "street_address"
    t.string "city"
    t.string "state"
    t.string "zip_code"
    t.string "phone_num"
    t.string "email_add"
    t.float "sup_balance", default: 0.0
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.string "country"
  end

  create_table "users", force: :cascade do |t|
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.string "username"
    t.string "password_digest"
  end

  create_table "vendor_products", force: :cascade do |t|
    t.bigint "vendor_id", null: false
    t.bigint "product_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["product_id"], name: "index_vendor_products_on_product_id"
    t.index ["vendor_id"], name: "index_vendor_products_on_vendor_id"
  end

  create_table "vendors", force: :cascade do |t|
    t.string "name"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.string "city"
    t.string "state"
    t.string "country"
  end

  add_foreign_key "customer_products", "customers"
  add_foreign_key "customer_products", "products"
  add_foreign_key "products", "suppliers"
  add_foreign_key "vendor_products", "products"
  add_foreign_key "vendor_products", "vendors"
end
