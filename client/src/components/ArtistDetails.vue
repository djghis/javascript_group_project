<template lang="html">
  <div v-if="artist" id="artistDetails">
    <h2>{{artist.name}}</h2>

  </div>
</template>

<script>
import {eventBus} from '../main.js'
import MusicService from '../services/MusicService.js'

export default {
  name: 'artist-details',
  props: ['artist'],
  mounted() {
    eventBus.$on('artist-selected', this.artist);
    MusicService.getArtistInfo(this.artist.mbid)
  },
  components: {
    "music-service": MusicService
  },
  methods: {

  }
}
</script>

<style lang="css" scoped>
</style>
