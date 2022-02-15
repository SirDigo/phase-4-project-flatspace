class CommentSerializer < ActiveModel::Serializer
  attributes :id, :content, :likes, :dislikes
  has_one :post
  has_one :user
end
