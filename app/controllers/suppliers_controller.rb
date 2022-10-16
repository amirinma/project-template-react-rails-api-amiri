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
        # byebug
        render json: supplier, status: :created
    rescue ActiveRecord::RecordInvalid => e
        render json: { errors: e.errors.full_messages }, status: :unprocessable_entity

    end
    def update
        # supplier = Supplier.find_by(id: params[:id])
        supplier = Supplier.find_by(name: params[:name])
        supplier.update(supplier_params)
        render json: supplier
    end
    def destroy
       
        supplier = Supplier.find_by(id: params[:id])
        supplier.destroy
        # head :no_content
        render json: supplier, status: :ok
        
    end
    def supplier_params
        params.permit(:name, :country)
    end
end
