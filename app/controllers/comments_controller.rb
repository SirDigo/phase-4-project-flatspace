class CommentsController < ApplicationController
    before_action :error_message_not_found, unless: :find_by_id, only: [:destroy, :update]

    #GET /comments
    def index
        render json: Comment.all, status: :ok
    end

    #POST /comments
    def create
        comment = Comment.new(params_permit)
        if comment.save
            render json: comment, status: :created
        else
            render json: { errors: [comment.errors.full_messages] }, status: :unprocessable_entity
        end
    end

    #DELETE /comments/:id
    def destroy
        @comment.destroy
        head :no_content
    end

    #PATCH /comments/:id
    def update
        @comment.update(params_permit)
        render json: @comment, status: :ok
    end

    #Private Methods
    private

    def find_by_id
        @comment = Comment.find_by(id: params[:id])
    end

    def params_permit
        params.permit(:content, :post_id, :user_id)
    end

    def error_message_not_found
        render json: { error: "Comment not found" }, status: :not_found
    end
end
