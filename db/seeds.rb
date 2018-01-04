# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


alb_img = File.open('../Ampafy_Seed/Album_Pics/Bright.jpg')
album1 = Album.new(title: 'Bright', author: 'Machine Gun Kelley' )
album1.album_cover = alb_img
album1.save!



# song1 = Song.new('Home', '')
# img = File.open('../')
# song1.image = img
