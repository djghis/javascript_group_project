const baseURL = 'http://ws.audioscrobbler.com/2.0/?method=${method}&${input}&api_key=${apiKey}&format=json' // basic format

export default {
  getMusic() {
    return fetch(baseURL)
    .then(res => res.json())
  }

  // don't think we need any other methods for this as this is simply for viewing data, we don't want to modify it?


}
