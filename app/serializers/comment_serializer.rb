class CommentSerializer < ActiveModel::Serializer
  attributes :id, :user, :content
  has_one :user
  has_one :post
end
