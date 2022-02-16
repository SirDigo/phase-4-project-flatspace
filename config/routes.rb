Rails.application.routes.draw do
  
  resources :comments, only: [:index]
  resources :posts
  resources :users, only: [:update, :create, :show, :index]

  post '/signup', to: 'users#create' 
  post '/login', to: 'sessions#create'
  delete '/logout', to: 'sessions#destroy'

  # adding this to test
  get '/authorized_user', to: 'users#show'


  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
