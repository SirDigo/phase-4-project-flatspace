Rails.application.routes.draw do

  resources :comments
  # resources :comments, only: [:index, :update, :create]
  resources :posts
  resources :users, only: [:index, :show, :update, :create, :reveal]
  
  # get '/users/:id', to: 'users#one'
  get '/users/:id/posts/:postid', to: 'users#post'
  get '/users/:id/posts', to: 'users#posts'
  post '/users/:id/posts', to: 'posts#create'
  get '/posts/:id/comments', to: 'posts#comments'
  post '/posts/:id/comments', to: 'comments#create'
  post '/signup', to: 'users#create' 
  post '/login', to: 'sessions#login'
  delete '/logout', to: 'sessions#logout'

  # adding this to test
  get '/authorized_user', to: 'users#reveal'


  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
