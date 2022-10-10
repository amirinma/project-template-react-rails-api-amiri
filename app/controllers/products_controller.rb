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
        product = Product.create(product_params)
        product.supplier_id = supplier.id
        product.save
        byebug
        render json: product, status: :created 
        
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
        params.permit(:name, :quantity, :price, :total, :bill_num, :date)
    end
end
