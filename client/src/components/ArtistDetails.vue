<template lang="html">
  <div v-if="artist" id="artistDetails">

  </div>
</template>

<script>
import {eventBus} from '../main.js'
import MusicService from '../services/MusicService.js'

export default {
  name: 'artist-details',
  props: ['artist'],
  data() {
    return {
      selectedArtist: null
    }
  },
  mounted() {
    eventBus.$on('artist-selected', (artist) => {
      this.selectedArtist = artist
      console.log(this.selectedArtist.name)
      MusicService.getArtistInfo(this.selectedArtist.name)
    })

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
