<template lang="html">
  <div  id="artistDetails">
    <h3>{{artist.name}}</h3>
    <h4>Similar artists:</h4>
    <h5>{{this.similarArtists}}</h5>
    <h4>Top albums:</h4>
    <h5>{{this.topAlbums}}</h5>
    <h4>Top tracks:</h4>
    <h5>{{this.topTracks}}</h5>
  </div>
</template>

<script>
import {eventBus} from '../main.js'
import MusicService from '../services/MusicService.js'

export default {
  name: 'artist-details',
  props: ['artist', 'topalbums', 'toptracks'],
  computed: {
    similarArtists: function(){
      const artists = this.artist.similar.artist.map(artist => {
        return artist.name;
      })
      return artists.join(", ")
    },
    topAlbums: function() {
        const albums = this.topalbums.album.map(album => {
          return album.name;
      })
      return albums.join(", ")
    },
    topTracks: function() {
      const tracks = this.toptracks.track.map(track => {
        return track.name;
      })
      return tracks.join(", ")
    }
  },
  components: {
    "music-service": MusicService
  }
}
</script>

<style lang="css" scoped>

  h5 {
    font-weight: lighter;
    font-size: 1em;
  }

</style>
