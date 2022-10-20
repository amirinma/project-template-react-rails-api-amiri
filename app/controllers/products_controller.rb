class ProductsController < ApplicationController
    def index
        products = Product.all
        render json: products
    end
    def show
        product = Product.find_by(id: params[:id])
        if product
            render json: product, except: [:created_at, :updated_at]
        else
            render json: {error: 'product Not Found'}, status: :not_found
        end
    end
    def create 
        supplier = Supplier.find_or_create_by(name: params[:supplier])
        productQ = Product.find_by(pro_category: params[:pro_category])
        
        product = Product.create(product_params)
       
        product.supplier_id = supplier.id
        supplier.sup_balance += product.total
        
        if product.pro_category == "AntiVirus"
            product.av_quantity += productQ.av_quantity
        end
        byebug
        product.save
        supplier.save
        productQ.save
       
        render json: product, status: :created 
    # rescue ActiveRecord::RecordInvalid => e
    #     render json: { errors: e.record.errors.full_messages }, status: :unprocessable_entity

    end
    def update
        product = Product.find_by(id: params[:id])
        product.update(product_params)
        render json: product
    end
    def destroy
        product = Product.find_by(id: params[:id])
        product.destroy
        head :no_content
    end
    def product_params
        params.permit(:name, :quantity, :price, :total, :bill_num, :date, :sup_balance, :pro_category, :av_quantity)
    end
end
