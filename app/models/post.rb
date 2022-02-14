class Post < ApplicationRecord
  belongs_to :user
  has_many :comments

  validates :title, presence: true

  validates :content, presence: true, unless: :image_present?
  validates :image, presence: true, unless: :content_present?


  private

  def image_present
    image.present?
  end

  def content_present
    content.present?
  end
end
