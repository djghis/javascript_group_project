use music;
db.dropDatabase();

// checked to see that all is set up correctly: all looks OK so far

db.playlists.insertOne({
  name: "Birthday Playlist",
  tracks: [
    {artist: "Wham!",
    track: "Wake Me Up Before You Go-Go"},
    {artist: "ABBA",
    track: "Dancing Queen"}
  ]
});
