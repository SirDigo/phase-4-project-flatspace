class UsersController < ApplicationController
  # before_action :error_message_not_found, unless: :find_by_id, only: [:update]
  skip_before_action :authorize_user, only: [:create, :show, :index, :posts, :post]
  # take :show, :index out once I am able to log in, only :create accessible outside login

  def index
    render json: User.all, status: :ok
  end

  # adding this for testing

  def show
    u = User.find_by(id: params[:id])
    render json: u, status: :ok
  end

  def posts
    @user = User.find_by(id: params[:id])
    p = @user.posts
    render json: p, status: :ok
  end

  def post
    @user = User.find_by(id: params[:id])
    # posts = @user.posts
    post = @user.posts.find_by(id: params[:postid])
    render json: post, status: :ok
  end


    #POST/SIGNUP /signup 
    def create
        user = User.create(user_params)
        if user.valid?
          session[:user_id] = user.id
          render json: user, status: :created
        else
          render json: { errors: [user.errors.full_messages] }, status: :unprocessable_entity
        end
      end

    #PATCH /users/:id
    def update
        user = @user
        user.update(user_params)
        render json: user, status: :ok
    end

    #DELETE /users/:id


    #Private Methods
    private

    def find_by_id
        @user = User.find_by(id: session[:user_id])
    end

    def user_params
       params.permit(:username, :password, :email)
      #  , :image_url, :bio, :flatiron_status
    end

    def error_message_not_found
        render json: { error: "User not found" }, status: :not_found
    end

    def authorize
      return render json: { error: "Not authorized" }, status: :unauthorized unless session.include? :user_id
    end
    
end