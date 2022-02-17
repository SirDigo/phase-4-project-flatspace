class PostSerializer < ActiveModel::Serializer
  attributes :id, :title, :image, :content, :likes, :dislikes
  has_one :user
  has_many :comments
end
