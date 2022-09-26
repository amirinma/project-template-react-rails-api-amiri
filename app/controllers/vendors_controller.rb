class VendorsController < ApplicationController
    def index
        vendor = Vendor.all
        render json: vendor
    end
    def show
        vendor = Vendor.find_by(id: params[:id])
        if vendor
            render json: vendor, except: [:created_at, :updated_at]
        else
            render json: {error: 'vendor Not Found'}, status: :not_found
        end
    end
end
