class CommentsController < ApplicationController
    skip_before_action :authorize_user, only: [:show, :index, :create]

    def index
        render json: Comment.all
    end

    def show
        c = Comment.find(params[:id])
        render json: c, status: :ok
    end

    def create
        puts "comment_params", comment_params
        comment = Comment.create!(comment_params)
        render json: comment, status: :created
    rescue ActiveRecord::RecordInvalid => invalid
        render json: {errors: invalid.record.errors}, status: :unprocessable_entity
    end

    private

    def comment_params
        cp = params.require(:comment).permit(:user_id, :post_id, :content)
        cp[:user_id] = current_user[:id]
        return cp
    end

end
