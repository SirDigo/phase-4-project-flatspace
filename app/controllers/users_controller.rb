class UsersController < ApplicationController
    before_action :error_message_not_found, unless: :find_by_id, only: [:update]

    #POST/SIGNUP /signup 
    def create
        @new_user = User.new(params)
        if @new_user.save
            session[:user_id] = @new_user.id
            render json: @new_user, status: :created
        else 
            render json: { errors: @new_user.errors.full_messages }, status: :unprocessable_entity
        end
    end

    #PATCH /users/:id
    def update
        user = @user
        user.update(params)
        render json: user, status: :ok
    end

    #DELETE /users/:id

    #Pravte Methods
    private

    def find_by_id
        @user = User.find_by(id: session[:user_id])
    end

    def params
        params.permit(:username, :password, :password_confirmation, :email, :image_url, :bio, :flatiron_status)
    end

    def error_message_not_found
        render json: { error: "User not found" }, status: :not_found
    end
end
