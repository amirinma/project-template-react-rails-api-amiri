class ProductsController < ApplicationController
    def index
        product = Product.all
        render json: product
    end
    def show
        product = Product.find_by(id: params[:id])
        if product
            render json: product, except: [:created_at, :updated_at]
        else
            render json: {error: 'product Not Found'}, status: :not_found
        end
    end
end
