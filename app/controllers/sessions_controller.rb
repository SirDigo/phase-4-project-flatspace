class SessionsController < ApplicationController
    skip_before_action :authorize_user, only:[:login]
    # skip_before_action :authorize_user, only: [:login, :destroy]
    #POST/LOGIN /login
    def login
        user = User.find_by(username: params[:username])
        if user&.authenticate(params[:password])
            session[:current_user] = user.id
            render json: user, status: :ok
        else 
            render json: { error: "Invalid username and/or password" }, status: :unauthorized
        end
    end

    #DELETE/SIGNOUT /logout
    def logout
        session.delete :current_user
        # head :no_content
    end
end
