# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
Album.destroy_all
Song.destroy_all

alb_img1 = File.open(asset_url(asset_url('Bright.jpg'))
album1 = Album.new(title: 'Bright', author: 'Machine Gun Kelley' )
album1.album_cover = alb_img1
album1.save!

alb_img2 = File.open(asset_url('Love-Album.jpg'))
album2 = Album.new(title: 'Love-Album', author: 'KevCool' )
album2.album_cover = alb_img2
album2.save!

alb_img3 = File.open(asset_url('Love-Album.jpg'))
album3 = Album.new(title: 'Dummy-Album', author: 'KevCool' )
album3.album_cover = alb_img3
album3.save!

alb_img4 = File.open(asset_url('Love-Album.jpg'))
album4 = Album.new(title: 'Dummy-Album2', author: 'KevCool' )
album4.album_cover = alb_img4
album4.save!

alb_img5 = File.open(asset_url('Love-Album.jpg'))
album5 = Album.new(title: 'Dummy-Album3', author: 'KevCool' )
album5.album_cover = alb_img5
album2.save!

alb_img6 = File.open(asset_url('Bright.jpg'))
album6 = Album.new(title: 'Bright', author: 'Machine Gun Kelley' )
album6.album_cover = alb_img6
album6.save!

alb_img7 = File.open(asset_url('Bright.jpg'))
album7 = Album.new(title: 'Bright', author: 'Machine Gun Kelley' )
album7.album_cover = alb_img7
album7.save!

alb_img8 = File.open(asset_url('Bright.jpg'))
album8 = Album.new(title: 'Bright', author: 'Machine Gun Kelley' )
album8.album_cover = alb_img8
album8.save!

alb_img9 = File.open(asset_url('Bright.jpg'))
album9 = Album.new(title: 'Bright', author: 'Machine Gun Kelley' )
album9.album_cover = alb_img9
album9.save!



# SONGS

song_1 = File.open('https://s3.amazonaws.com/AMPAFY-DEV/songs/audios/000/000/026/original/Ed_Sheeran_-_Perfect_Official_Music_Video_Mp3Converter.net_.mp3')
song1 = Song.new(title: 'Ed-sheeran', album_id: album1.id)
song1.audio = song_1
song1.save!

song_2 = File.open('https://s3.amazonaws.com/AMPAFY-DEV/songs/audios/000/000/027/original/Home.mp3')
song2 = Song.new(title: 'Home', album_id: album1.id)
song2.audio = song_2
song2.save!

song_3 = File.open('https://s3.amazonaws.com/AMPAFY-DEV/songs/audios/000/000/028/original/World_Gone_Mad.mp3')
song3 = Song.new(title: 'World_Gone_Mad', album_id: album1.id)
song3.audio = song_3
song3.save!
