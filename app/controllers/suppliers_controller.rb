class SuppliersController < ApplicationController
    def index
        supplier = Supplier.all
        render json: supplier
    end
    def show
        supplier = Supplier.find_by(id: params[:id])
        if supplier
            render json: supplier, except: [:created_at, :updated_at]
        else
            render json: {error: 'Supplier Not Found'}, status: :not_found
        end
    end
    def create 
        supplier = Supplier.create(supplier_params)
        render json: supplier, status: :created 
    end
    def update
        supplier = Supplier.find_by(id: params[:id])
        supplier.update(supplier_params)
        render json: supplier
    end
    def destroy
        supplier = Supplier.find_by(id: params[:id])
        supplier.destroy
        head :no_content
    end
    def supplier_params
        params.permit(:name, :country)
    end
end
