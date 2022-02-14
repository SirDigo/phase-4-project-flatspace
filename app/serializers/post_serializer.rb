class PostSerializer < ActiveModel::Serializer
  attributes :id, :creator, :title, :image, :content, :likes, :dislikes
  has_one :user
end
