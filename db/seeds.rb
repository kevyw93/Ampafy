# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
Album.destroy_all
Song.destroy_all

alb_img1 = open('https://s3.amazonaws.com/ampafy-seeds/Bright.jpg')
album1 = Album.new(title: 'Bright', author: 'Machine Gun Kelley', album_cover: alb_img1 )
album1.save!

alb_img2 = open('https://s3.amazonaws.com/ampafy-seeds/Love-Album.jpg')
album2 = Album.new(title: 'Love-Album', author: 'KevCool', album_cover: alb_img2 )
album2.save!

alb_img3 = open('https://s3.amazonaws.com/ampafy-seeds/Love-Album.jpg')
album3 = Album.new(title: 'Dummy-Album', author: 'KevCool', album_cover: alb_img3 )
album3.save!

alb_img4 = open('https://s3.amazonaws.com/ampafy-seeds/Love-Album.jpg')
album4 = Album.new(title: 'Dummy-Album2', author: 'KevCool', album_cover: alb_img4 )
album4.save!

alb_img5 = open('https://s3.amazonaws.com/ampafy-seeds/Love-Album.jpg')
album5 = Album.new(title: 'Dummy-Album3', author: 'KevCool', album_cover: alb_img5 )
album2.save!

alb_img6 = open('https://s3.amazonaws.com/ampafy-seeds/Bright.jpg')
album6 = Album.new(title: 'Bright', author: 'Machine Gun Kelley', album_cover:alb_img6 )
album6.save!

alb_img7 = open('https://s3.amazonaws.com/ampafy-seeds/Bright.jpg')
album7 = Album.new(title: 'Bright', author: 'Machine Gun Kelley', album_cover:alb_img7 )
album7.save!

alb_img8 = open('https://s3.amazonaws.com/ampafy-seeds/Bright.jpg')
album8 = Album.new(title: 'Bright', author: 'Machine Gun Kelley', album_cover:alb_img8 )
album8.save!

alb_img9 = open('https://s3.amazonaws.com/ampafy-seeds/Bright.jpg')
album9 = Album.new(title: 'Bright', author: 'Machine Gun Kelley', album_cover:alb_img9)
album9.save!



# SONGS

song_1 = open('https://s3.amazonaws.com/ampafy-seeds/World_Gone_Mad.mp3')
song1 = Song.new(title: 'Ed-sheeran', album_id: album1.id, audio: song_1)
song1.save!

song_2 = open('https://s3.amazonaws.com/ampafy-seeds/Home.mp3')
song2 = Song.new(title: 'Home', album_id: album1.id, audio: song_2)
song2.save!

song_3 = open('https://s3.amazonaws.com/ampafy-seeds/World_Gone_Mad.mp3')
song3 = Song.new(title: 'World_Gone_Mad', album_id: album1.id, audio: song_3)
song3.save!
