class CommentSerializer < ActiveModel::Serializer
  attributes :content, :likes, :dislikes
  # has_one :post
  has_one :user
end
