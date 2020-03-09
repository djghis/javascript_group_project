<template lang="html">
  <div v-if="artist" id="artistDetails">
    <h3>{{artist.name}}</h3>
    <h4>Similar artists: {{this.similarArtists}}</h4>
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
    }
  },
  components: {
    "music-service": MusicService
  }
}
</script>

<style lang="css" scoped>
</style>
