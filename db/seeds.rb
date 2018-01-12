# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
Album.destroy_all
Song.destroy_all

alb_img1 = 'https://s3.amazonaws.com/ampafy-seeds/albumCoverSeeds/93989-collateral.jpg'
album1 = Album.new(title: 'Bright', author: 'Machine Gun Kelley', album_cover: alb_img1 )
album1.save!

alb_img2 = 'https://s3.amazonaws.com/ampafy-seeds/albumCoverSeeds/Edsheeran.jpg'
album2 = Album.new(title: 'Divide', author: 'Ed-Sheeran', album_cover: alb_img2 )
album2.save!

alb_img3 = 'https://s3.amazonaws.com/ampafy-seeds/albumCoverSeeds/b7923b73b4614aa0a605e6b41ee17a0d.jpg'
album3 = Album.new(title: 'The Cool Kids', author: 'KevCul', album_cover: alb_img3 )
album3.save!

alb_img4 = 'https://s3.amazonaws.com/ampafy-seeds/albumCoverSeeds/inside-the-weeknd-starboy-full-size.jpg'
album4 = Album.new(title: 'Andrew Sons', author: 'Andrew', album_cover: alb_img4 )
album4.save!

alb_img5 = 'https://s3.amazonaws.com/ampafy-seeds/albumCoverSeeds/Fat-Freddys-Drop-Blackbird.jpg'
album5 = Album.new(title: 'Crazy', author: 'Sunny', album_cover:alb_img5 )
album5.save!

alb_img6 = 'https://s3.amazonaws.com/ampafy-seeds/albumCoverSeeds/inside-the-weeknd-starboy-full-size.jpg'
album6 = Album.new(title: 'Numb', author: 'Chris', album_cover:alb_img6 )
album6.save!

alb_img7 = 'https://s3.amazonaws.com/ampafy-seeds/Bright.jpg'
album7 = Album.new(title: 'Bright', author: 'Machine Gun Kelley', album_cover:alb_img7 )
album7.save!

alb_img8 = 'https://s3.amazonaws.com/ampafy-seeds/albumCoverSeeds/jrb80p.jpg'
album8 = Album.new(title: 'The Best In the World', author: 'Kayne West', album_cover:alb_img8 )
album8.save!

alb_img9 = 'https://s3.amazonaws.com/ampafy-seeds/albumCoverSeeds/xgvlyytw9rvrmjjc2r3t.jpeg'
album9 = Album.new(title: 'NightMare', author: 'SevenFold', album_cover:alb_img9)
album9.save!



# SONGS



song_1 = 'https://s3.amazonaws.com/ampafy-seeds/Home.mp3'
song1 = Song.new(title: 'Home', album_id: album2.id, audio: song_1)
song1.save!

song_2 = 'https://s3.amazonaws.com/ampafy-seeds/World_Gone_Mad.mp3'
song2 = Song.new(title: 'Loving You So', album_id: album1.id, audio: song_2)
song2.save!

song_3 = "https://s3.amazonaws.com/ampafy-seeds/Dont+Wanna+Know+-+Maroon+5+(Boyce+Avenue+ft.+Sarah+Hyland+cover)+on+Spotify++iTunes.mp3"
song3 = Song.new(title: "Don't Want to Know", album_id: album3.id, audio: song_3)
song3.save!

song_4 = "https://s3.amazonaws.com/ampafy-seeds/Demons+-+Imagine+Dragons+(Cover+by+Jasmine+Thompson).mp3"
song4 = Song.new(title: 'Demon', album_id: album3.id, audio: song_4)
song4.save!

song_5 = "https://s3.amazonaws.com/ampafy-seeds/Linkin+Park-In+The+End.mp3"
song5 = Song.new(title: 'In The End', album_id: album1.id, audio: song_5)
song5.save!

song_6 = "https://s3.amazonaws.com/ampafy-seeds/Mac+Miller+-+Smile+Back.mp3"
song6 = Song.new(title: 'Smile Back', album_id: album1.id, audio: song_6)
song6.save!
