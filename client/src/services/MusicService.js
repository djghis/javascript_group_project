const baseURL = `http://ws.audioscrobbler.com/2.0/` // basic format

export default {
  getMusic() {
    return fetch(baseURL)
    .then(res => res.json())
  },

  getArtists(artist) {
    const url = `${baseURL}?method=artist.search&artist=${artist}&api_key=${process.env.VUE_APP_API_KEY}&format=json`
    console.log(url);
    return fetch(url)
    .then(res => res.json())
    .then(data => data.results.artistmatches.artist)
  },

  getAlbums(album) {
    const url = `${baseURL}?method=album.search&album=${album}&api_key=${process.env.VUE_APP_API_KEY}&format=json`
    console.log(url);
    return fetch(url)
    .then(res => res.json())
    .then(data => data.results.albummatches.artist)
  },

  getArtistInfo(name) {
    const url = `${baseURL}?method=artist.getinfo&artist=${name}&api_key=${process.env.VUE_APP_API_KEY}&format=json`
    return fetch(url)
    .then(res => res.json())
    .then(data => data.artist)
  },

  getArtistAlbums(name) {
    const url = `${baseURL}?method=artist.gettopalbums&artist=${name}&limit=3&api_key=${process.env.VUE_APP_API_KEY}&format=json`
    return fetch(url)
    .then(res => res.json())
    .then(data => data.topalbums)
  },

  getArtistTracks(name) {
    const url = `${baseURL}?method=artist.gettoptracks&artist=${name}&limit=3&api_key=${process.env.VUE_APP_API_KEY}&format=json`
    return fetch(url)
    .then(res => res.json())
    .then(data => data.toptracks)
  }



}
