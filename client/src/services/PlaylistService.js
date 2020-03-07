const baseURL = 'http://localhost:3000/api/playlists/'

export default {

  getPlaylist() {
    return fetch(baseURL)
    .then(res => res.json())
  },
  postPlaylist(payload){
    return fetch(baseURL, {
      method: 'POST',
      body: JSON.stringify(payload),
      headers: {'Content-Type': 'application/json'}
    })
    .then(res => res.json())
  },
  deletePlaylist(id){
    return fetch(baseURL + id, {
      method: 'DELETE'
    })
  },
  updatePlaylist(payload, id){
    return fetch(baseURL + id, {
      method: 'PUT',
      body: JSON.stringify(payload),
      headers: {'Content-Type': 'application/json'}
    })
    .then(res => res.json())
  }

}
