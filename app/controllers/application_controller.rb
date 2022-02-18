class ApplicationController < ActionController::API
  include ActionController::Cookies
  before_action :authorize_user

  def current
    User.find_by(id: session[:user_id])
  end
  


  # def current_user
  #   User.find_by(id: session[:current_user])
  # end

  def authorize_user   
    return render json: { error: "Not authorized" }, status: :unauthorized unless current_user
  end

  # def is_admin
  #   return render json: { error: "Not authorized" }, status: :unauthorized unless current_user.admin
  # end 

  # private
  # def render_not_found(e)
  #   render json: {error: "#{e.model}NOT FOUND :("}, status: :not_found
  # end 


end
