<template lang="html">
  <div v-if="artist" id="artistDetails">
    <h3>{{artist.name}}</h3>
    <h4>Similar artists: {{this.similarArtists}}</h4>
    <h4>Top albums: {{this.topAlbums}}</h4>
    <h4>Top tracks: {{this.topTracks}}</h4>
  </div>
</template>

<script>
import {eventBus} from '../main.js'
import MusicService from '../services/MusicService.js'

export default {
  name: 'artist-details',
  props: ['artist'],
  computed: {
    similarArtists: function(){
      return this.artist.similar.artist.map(artist => {
        return artist.name;
      })
    },
    topAlbums: function() {
      return this.artist.topalbums
    },
    topTracks: function() {
      return this.artist.toptracks
    }
  },
  components: {
    "music-service": MusicService
  }
}
</script>

<style lang="css" scoped>
</style>
