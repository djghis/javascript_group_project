const baseURL = `http://ws.audioscrobbler.com/2.0/` // basic format

export default {
  getMusic() {
    return fetch(baseURL)
    .then(res => res.json())
  },

  getArtists(artist) {
    const url = `${baseURL}?method=artist.search&artist=${artist}&api_key=7c5633ed04fb1140593f4c642ba29c60&format=json`
    console.log(url);
    return fetch(url)
    .then(res => res.json())
    .then(data => data.results.artistmatches.artist)
  },

  getAlbums(album) {
    const url = `${baseURL}?method=album.search&album=${album}&api_key=7c5633ed04fb1140593f4c642ba29c60&format=json`
    console.log(url);
    return fetch(url)
    .then(res => res.json())
    .then(data => data.results.albummatches.artist)
  },

  getArtistInfo(name) {
    const url = `${baseURL}?method=artist.getinfo&artist=${name}&api_key=7c5633ed04fb1140593f4c642ba29c60&format=json`
    return fetch(url)
    .then(res => res.json())
    .then(data => data.artist)
  }



}
