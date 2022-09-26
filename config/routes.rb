Rails.application.routes.draw do
  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get '/suppliers', to: 'suppliers#index'
  get '/suppliers/:id', to: 'suppliers#show'
  get '/products', to: 'products#index'
  get '/products/:id', to: 'products#show'
  get '/vendors', to: 'vendors#index'
  get '/vendors/:id', to: 'vendors#show'
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
  
end
