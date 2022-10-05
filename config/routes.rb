Rails.application.routes.draw do
  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get '/suppliers', to: 'suppliers#index'
  get '/suppliers/:id', to: 'suppliers#show'
  post '/suppliers', to: 'suppliers#create'
  patch '/suppliers/:id', to: 'suppliers#update'
  delete '/suppliers/:id', to: 'suppliers#destroy'

  get '/customers', to: 'customers#index'
  get '/customers/:id', to: 'customers#show'
  post '/customers', to: 'customers#create'
  patch '/customers/:id', to: 'customers#update'
  delete '/customers/:id', to: 'customers#destroy'


  get '/products', to: 'products#index'
  get '/products/:id', to: 'products#show'
  get '/vendors', to: 'vendors#index'
  get '/vendors/:id', to: 'vendors#show'
  post "/login", to: "sessions#create"
  delete "/logout", to: "sessions#destroy"
  post '/signup', to: 'users#create'
  get "/me", to: "users#show"
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
  
end
