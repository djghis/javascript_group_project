const baseURL = `http://ws.audioscrobbler.com/2.0/` // basic format

export default {
  getMusic() {
    return fetch(baseURL)
    .then(res => res.json())
  },

  getArtists(artist, apiKey) {
    const url = `${baseURL}?method=artist.search&artist=${artist}&api_key=${apiKey}&format=json`
    console.log(url);
    return fetch(url)
    .then(res => res.json())
    .then(data => data.results.artistmatches.artist)
  }

  // don't think we need any other methods for this as this is simply for viewing data (and we are passing in different parameters straight into the baseURL based on what the user searches for), we don't want to modify it? If this is wrong, all the methods can be easily copied over from PlaylistService.js


}
