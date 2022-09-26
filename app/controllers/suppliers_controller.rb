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
end
