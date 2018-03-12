# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
Album.destroy_all
Song.destroy_all

alb_img1 = "https://upload.wikimedia.org/wikipedia/en/thumb/1/1b/Adele_-_21.png/220px-Adele_-_21.png"
alb1 = Album.new(title: '21', author: 'Adele', album_cover: alb_img1)
alb1.save!

alb_img2 = "https://s3.amazonaws.com/ampafy-seeds/albumCoverSeeds/X_cover.png"
alb2 = Album.new(title: 'One', author: 'Ed Sheeran', album_cover: alb_img2)
alb2.save!

alb_img3 = "https://s3.amazonaws.com/ampafy-seeds/albumCoverSeeds/Taylor_Swift_-_1989.png"
alb3 = Album.new(title: '1989', author: "Taylor Swift", album_cover: alb_img3)
alb3.save!

alb_img4 = "https://upload.wikimedia.org/wikipedia/en/b/b2/Lorde_-_Melodrama.png"
alb4= Album.new(title: 'Melodrama', author: 'Lorde', album_cover: alb_img4)
alb4.save!

alb_img5 = "https://orig00.deviantart.net/6600/f/2013/047/9/6/art_of_meteora___version_2_by_reunarwolf-d5v3zh9.png"
alb5 = Album.new(title: "Meteora", author: 'Linkin Park', album_cover: alb_img5)
alb5.save!

# Songs
# Adele - 21 album
song1 = "https://s3.amazonaws.com/ampafy-seeds/albumSongSeeds/01+Rolling+In+The+Deep.mp3"
song_1 = Song.new(title: 'Rolling In The Deep', album_id: alb1.id, audio: song1)
song_1.save!

song2 = "https://s3.amazonaws.com/ampafy-seeds/albumSongSeeds/02+Rumor+Has+It.mp3"
song_2 = Song.new(title: 'Rumor Has It', album_id: alb1.id, audio: song2)
song_2.save!

song3 = "https://s3.amazonaws.com/ampafy-seeds/albumSongSeeds/03+Turning+Tabels.mp3"
song_3 = Song.new(title: 'Turning Tables', album_id: alb1.id, audio: song3)
song_3.save!

song4 = "https://s3.amazonaws.com/ampafy-seeds/albumSongSeeds/04+Don't+You+Remember.mp3"
song_4 = Song.new(title: "Don't You Remember", album_id: alb1.id, audio: song4)
song_4.save!

song5 = "https://s3.amazonaws.com/ampafy-seeds/albumSongSeeds/05+Set+Fire+To+The+Rain.mp3"
song_5 = Song.new(title: 'Set Fire To The Rain', album_id: alb1.id, audio: song5)
song_5.save!

song6 = "https://s3.amazonaws.com/ampafy-seeds/albumSongSeeds/06+He+Won't+Go.mp3"
song_6 = Song.new(title: "He Won't Go", album_id: alb1.id, audio: song6)
song_6.save!

song7 = "https://s3.amazonaws.com/ampafy-seeds/albumSongSeeds/07+Take+It+All.mp3"
song_7 = Song.new(title: "Take It All", album_id: alb1.id, audio: song7)
song_7.save!

song8 = "https://s3.amazonaws.com/ampafy-seeds/albumSongSeeds/08+I'll+Be+Waiting.mp3"
song_8 = Song.new(title: "I'll Be Waiting", album_id: alb1.id, audio: song8)
song_8.save!

song9 = "https://s3.amazonaws.com/ampafy-seeds/albumSongSeeds/09+One+And+Only.mp3"
song_9 = Song.new(title: "One And Only", album_id: alb1.id, audio: song9)
song_9.save!

song10 = "https://s3.amazonaws.com/ampafy-seeds/albumSongSeeds/11+Someone+Like+You.mp3"
song_10 = Song.new(title: "Someone Like You", album_id: alb1.id, audio: song10)
song_10.save!

# Divide ed sheeran

song11 = "https://s3.amazonaws.com/ampafy-seeds/albumSongSeeds/01+One.mp3"
song_11 = Song.new(title: "One", album_id: alb2.id, audio: song11)
song_11.save!

song12 = "https://s3.amazonaws.com/ampafy-seeds/albumSongSeeds/02+I'm+a+Mess.mp3"
song_12 = Song.new(title: "I'm a Mess", album_id: alb2.id, audio: song12)
song_12.save!

song13 = "https://s3.amazonaws.com/ampafy-seeds/albumSongSeeds/03+Sing.mp3"
song_13 = Song.new(title: "Sing", album_id: alb2.id, audio: song13)
song_13.save!

song14 = "https://s3.amazonaws.com/ampafy-seeds/albumSongSeeds/04+Don't.mp3"
song_14 = Song.new(title: "Don't", album_id: alb2.id, audio: song14)
song_14.save!

song15 = "https://s3.amazonaws.com/ampafy-seeds/albumSongSeeds/05+Nina.mp3"
song_15 = Song.new(title: "Nina", album_id: alb2.id, audio: song15)
song_15.save!

song16 = "https://s3.amazonaws.com/ampafy-seeds/albumSongSeeds/06+Photograph.mp3"
song_16 = Song.new(title: "Photograph", album_id: alb2.id, audio: song16)
song_16.save!

song17 = "https://s3.amazonaws.com/ampafy-seeds/albumSongSeeds/07+Bloodstream.mp3"
song_17 = Song.new(title: "Bloodstream", album_id: alb2.id, audio: song17)
song_17.save!

song18 = "https://s3.amazonaws.com/ampafy-seeds/albumSongSeeds/08+Tenerife+Sea.mp3"
song_18 = Song.new(title: "Tenerife Sea", album_id: alb2.id, audio: song18)
song_18.save!

song19 = "https://s3.amazonaws.com/ampafy-seeds/albumSongSeeds/09+Runaway.mp3"
song_19 = Song.new(title: "Runaway", album_id: alb2.id, audio: song19)
song_19.save!

song20 = "https://s3.amazonaws.com/ampafy-seeds/albumSongSeeds/11+Thinking+Out+Loud.mp3"
song_20 = Song.new(title: "Thinking Out Loud", album_id: alb2.id, audio: song20)
song_20.save!

#Taylor Swift 1989

song21 = "https://s3.amazonaws.com/ampafy-seeds/albumSongSeeds/Welcome+To+New+York.mp3"
song_21 = Song.new(title: "Welcome To New York", album_id: alb3.id, audio: song21)
song_21.save!

song22 = "https://s3.amazonaws.com/ampafy-seeds/albumSongSeeds/Blank+Space.mp3"
song_22 = Song.new(title: "Blank Space", album_id: alb3.id, audio: song22)
song_22.save!

song23 = "https://s3.amazonaws.com/ampafy-seeds/albumSongSeeds/Style.mp3"
song_23 = Song.new(title: "Style", album_id: alb3.id, audio: song23)
song_23.save!

song24 = "https://s3.amazonaws.com/ampafy-seeds/albumSongSeeds/Out+Of+The+Wood.mp3"
song_24 = Song.new(title: "Out Of The Wood", album_id: alb3.id, audio: song24)
song_24.save!

song25 = "https://s3.amazonaws.com/ampafy-seeds/albumSongSeeds/All+You+Had+To+Do+Was+Stay.mp3"
song_25 = Song.new(title: "All You Had To Do Was Stay", album_id: alb3.id, audio: song25)
song_25.save!

song26 = "https://s3.amazonaws.com/ampafy-seeds/albumSongSeeds/Shake+It+Off.mp3"
song_26 = Song.new(title: "Shake It Off", album_id: alb3.id, audio: song26)
song_26.save!

song27 = "https://s3.amazonaws.com/ampafy-seeds/albumSongSeeds/Bad+Blood.mp3"
song_27 = Song.new(title: "Bad Blood", album_id: alb3.id, audio: song27)
song_27.save!

# lorde melodrama
song28 = "https://s3.amazonaws.com/ampafy-seeds/albumSongSeeds/Green+Light.mp3"
song_28 = Song.new(title: "Green Light", album_id: alb4.id, audio: song28)
song_28.save!

song29 = "https://s3.amazonaws.com/ampafy-seeds/albumSongSeeds/Sober.mp3"
song_29 = Song.new(title: "Sober", album_id: alb4.id, audio: song29)
song_29.save!

song30 = "https://s3.amazonaws.com/ampafy-seeds/albumSongSeeds/Homemade+dynamite.mp3"
song_30 = Song.new(title: "Homemade Dynamite", album_id: alb4.id, audio: song30)
song_30.save!

#linkin park meteora

song31 = "https://s3.amazonaws.com/ampafy-seeds/albumSongSeeds/Somewhere+I+belong.mp3"
song_31 = Song.new(title: "Somewhere I Belong", album_id: alb5.id, audio: song31)
song_31.save!

song32 = "https://s3.amazonaws.com/ampafy-seeds/albumSongSeeds/Lying+From+You.mp3"
song_32 = Song.new(title: "Lying From You", album_id: alb5.id, audio: song32)
song_32.save!

song33 = "https://s3.amazonaws.com/ampafy-seeds/albumSongSeeds/Breaking+The+Habit.mp3"
song_33 = Song.new(title: "Breaking The Habit", album_id: alb5.id, audio: song33)
song_33.save!

song34 = "https://s3.amazonaws.com/ampafy-seeds/albumSongSeeds/Numb.mp3"
song_34 = Song.new(title: "Numb", album_id: alb5.id, audio: song34)
song_34.save!

song34 = "https://s3.amazonaws.com/ampafy-seeds/albumSongSeeds/Don't+Stay.mp3"
song_34 = Song.new(title: "Don't Stay", album_id: alb5.id, audio: song34)
song_34.save!
