class RempveColumFromPost < ActiveRecord::Migration[6.1]
  def change
    remove_column :posts, :creator, :string
    remove_column :comments, :commentor, :string
  end
end
