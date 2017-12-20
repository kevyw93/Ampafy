Sample State

{
  entities: {
    users: {
      1: {
        id: 1,
        username: 'kevin',
        img_url: "random_url",
        playlist: [12,3,5,67,8],
        friends: [2,3]
        },
      2: {
        id: 2 ,
        username: "chris",
        img_url: "derpderp_url",
        playlist: [1,23,4,5],
        friends: [1,3]
      },
      3: {
        id: 3,
        username "sunny",
        img_url: "afljriogjajaieurl",
        playlist: [1,3,4,5,6],
        friends: [1,2]
      }
    },

    playlist: {
      1: {
        id: 1,
        songs: [1,2,3,4,5],
        user_id: 3
      },
      3: {
        id: 3,
        songs: [1,2,3,4,5],
        user_id: 3
      },
      5: {
        id: 5,
        songs: [1,2,3,4,5],
        user_id: 1
      },
      6: {
        id: 6,
        songs: [1,2,3,4,5],
        user_id: 2
      }

    },

    albums: {
      1: {
        id: 1,
        songs: [1,2],
        img_url: "goodboys_url"
      },
      2: {
        id: 2,
        songs: [4,5],
        img_url: "bored_url"
      }

    },

    songs: {
      1: {
        id: 1,
        title: "thebestlovesong",
        author: "T-Payne",
        album_id: 1
      },
      2: {
        id: 2,
        title: "seventeen",
        author: "seventeen",
        album_id: 1
      },
      3: {
        id: 3,
        title: "Cherry Bomb",
        author: "NCT 127",
        album_id: 2
      },
      4: {
        id: 4,
        title: "Airplanes",
        author: "BOB",
        album_id: 2
      },
      5: {
        id: 5,
        title: "Waitin for supaman",
        author: "Daughtry",
        album_id: 3
      },
      6: {
        id: 6,
        title: "keppler4",
        author: "T-Payne",
        album_id: 3
      },
      7: {
        id: 7,
        title: "pojos",
        author: "stevie hong",
        album_id: 4
      },
      8: {
        id: 8,
        title: "iloveitthatway",
        author: "backstreetsboy",
        album_id: 4
      },
      9: {
        id: 9,
        title: "keep it up",
        author: "T-Payne",
        album_id: 5
      }
      8: {
        id: 8,
        title: "derpderp",
        author: "rihanana",
        album_id: 5
      }
    }



  },

  sessions {
    id: 1
    username: "kevin",
    liked_songs: [1,2,3,5]
  },

  ui: {
    loading{
      [true, false]
    },
    errors: {
      login: ["Incorrect username/password combo"]
    }
  }
}
