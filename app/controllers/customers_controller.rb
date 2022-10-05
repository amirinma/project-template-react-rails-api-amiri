class CustomersController < ApplicationController
    def index
        supplier = Customer.all
        render json: supplier
    end
    def show
        supplier = Customer.find_by(id: params[:id])
        if supplier
            render json: supplier, except: [:created_at, :updated_at]
        else
            render json: {error: 'Supplier Not Found'}, status: :not_found
        end
    end
    def create 
        supplier = Customer.create(customer_params)
        render json: supplier, status: :created 
    end
    def update
        supplier = Customer.find_by(id: params[:id])
        supplier.update(customer_params)
        render json: supplier
    end
    def destroy
        supplier = Customer.find_by(id: params[:id])
        supplier.destroy
        head :no_content
    end
    def customer_params
        params.permit(:name, :country)
    end
end
