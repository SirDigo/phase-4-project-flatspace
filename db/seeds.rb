puts "Destroying seeds..."

User.destroy_all
Post.destroy_all
Comment.destroy_all

puts "Seeding users..."

25.times{User.create({username: Faker::Internet.username, password_digest: Faker::Internet.password, email: Faker::Internet.email})}

puts "Seeding Posts..."

50.times{Post.create({title: Faker::Movie.title, content: Faker::Lorem.paragraph, user_id: User.all.sample.id})}

puts "Seeding comments..."

100.times{Comment.create({content: Faker::Lorem.sentences, post_id: Post.all.sample.id, user_id: User.all.sample.id})}

puts "Done Seeding!"