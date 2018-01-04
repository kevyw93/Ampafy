# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
Album.destroy_all
Song.destroy_all

alb_img = File.open('../Ampafy_Seed/Album_Pics/Bright.jpg')
album1 = Album.new(title: 'Bright', author: 'Machine Gun Kelley' )
album1.album_cover = alb_img
album1.save!


song_1 = File.open('../Ampafy_Seed/Songs/Machine_Gun_Kelly_X_Ambassadors_Bebe_Rexha_-_Home_from_Bright_The_Album_Music_Video[Mp3Converter.net].mp3')
song1 = Song.new(title: 'Home', album_id: album1.id)
song1.audio = song_1
song1.save!
