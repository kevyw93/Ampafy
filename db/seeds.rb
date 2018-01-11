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
album2.save!

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

song_1 = 'https://s3.amazonaws.com/ampafy-seeds/albumSongSeeds/Ed_Sheeran_-_Happier_Music_Video%5BMp3Converter.net%5D.mp3'
song1 = Song.new(title: 'Shapes of You', album_id: album2.id, audio: song_1)
song1.save!

song_2 = 'https://s3.amazonaws.com/ampafy-seeds/Home.mp3'
song2 = Song.new(title: 'Home', album_id: album1.id, audio: song_2)
song2.save!

song_3 = 'https://s3.amazonaws.com/AMPAFY-DEV/songs/audios/000/000/028/original/World_Gone_Mad.mp3'
song3 = Song.new(title: 'World_Gone_Mad', album_id: album1.id, audio: song_3)
song3.save!

song_4 = 'https://s3.amazonaws.com/ampafy-seeds/albumSongSeeds/Taylor_Swift_-_Bad_Blood_ft_Kendrick_Lamar%5BMp3Converter.net%5D.mp3'
song4 = Song.new(title: 'Bad-Blood', album_id: album3.id, audio: song_4)
song4.save!

song_5 = 'https://s3.amazonaws.com/ampafy-seeds/albumSongSeeds/MV_BTS%E1%84%87%E1%85%A1%E1%86%BC%E1%84%90%E1%85%A1%E1%86%AB%E1%84%89%E1%85%A9%E1%84%82%E1%85%A7%E1%86%AB%E1%84%83%E1%85%A1%E1%86%AB_FIRE_%E1%84%87%E1%85%AE%E1%86%AF%E1%84%90%E1%85%A1%E1%84%8B%E1%85%A9%E1%84%85%E1%85%B3%E1%84%82%E1%85%A6%5BMp3Converter.net%5D.mp3'
song5 = Song.new(title: 'Fire', album_id: album3.id, audio: song_5)
song5.save!
