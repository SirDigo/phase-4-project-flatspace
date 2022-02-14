class CommentSerializer < ActiveModel::Serializer
  attributes :id, :commentor, :content, :likes, :dislikes
  has_one :post
  has_one :user
end
