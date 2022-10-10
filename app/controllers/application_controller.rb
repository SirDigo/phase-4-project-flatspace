class ApplicationController < ActionController::API
  include ActionController::Cookies
  rescue_from ActiveRecord::RecordNotFound, with: :render_not_found
  before_action :authorize_user
  # include ActionController::Helpers
  # helper_method :current_user
  # helper_method :logged_in?

  def current_user
    User.find_by(id: session[:current_user])
  end

  # def logged_in?
  #   !current_user.nil?  
  # end

  def authorize_user
    return render json: { error: "Not authorized" }, status: :unauthorized unless current_user
  end

  # def is_admin
  #   return render json: { error: "Not authorized" }, status: :unauthorized unless current_user.admin
  # end 

  private
  def render_not_found(e)
    render json: {error: "#{e.model}NOT FOUND :("}, status: :not_found
  end 


end
