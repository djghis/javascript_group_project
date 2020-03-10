use music;
db.dropDatabase();

// checked to see that all is set up correctly: all looks OK so far

db.playlists.insertOne({
  name: "Birthday 2 Playlist",
  tracks: [
    {artist: "Wham!",
    name: "Wake Me Up Before You Go-Go"},
    {artist: "ABBA",
    name: "Dancing Queen"}
  ]
})

db.playlists.insertOne({
  name: "Birthday Playlist",
  tracks: [
    {artist: "Wham!",
    name: "Wake Me Up Before You Go-Go"},
    {artist: "ABBA",
    name: "Dancing Queen"}
  ]
})
;
