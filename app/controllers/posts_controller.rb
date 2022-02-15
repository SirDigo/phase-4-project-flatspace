class PostsController < ApplicationController

    #GET /posts

    def index
        render json: Post.all
    end

    #SHOW /posts/:id
    def show
        render json: @post
    end

    # creator = post.user.username

    # POST /posts
    # def create
    #     post = Post.new(post_params)
    #     if post.save
    #         render json: post, status: :created
    #         # redirect_to @post, notice: "Post was successfully created."
    #     else
    #     render json: {errors: post.record.full_messages}, status: :unprocessable_entity
    #     end

    # end

    def create
        post = Post.create!(post_params)
        render json: post, status: :created

    rescue ActiveRecord::RecordInvalid => invalid
        render json: {errors: invalid.record.errors}, status: :unprocessable_entity

    end

    #PATCH / PUT /posts/:id

    def update
        post = @post
        post.update!(post_params)
        render json: user, status: :ok
    end 
    # def update
    #     if @post.update(post_params)
    #         redirect_to @post, notice: "Post was successfully updated."
    #     else
    #         render :edit
    #      end
    # end

    #DELETE /posts/:id
    def destroy
        @post.destroy
        # redirect_to @post, notice: "Post was successfully destroyed."
        head :no_content
    end


    private

    def set_post
        @post = Post.find(params[:id])
    end

    def post_params
        params.require(:post).permit(:title, :user_id, :content, :image)
    end

end