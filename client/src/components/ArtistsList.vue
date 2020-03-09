<template lang="html">
  <div class="">
    <ul>
      <li v-if="artist.mbid" @click="handleClick(artist.mbid)" v-for='(artist, index) in artists' :key='index'>{{artist.name}}</li>
    </ul>
  </div>

</template>

<script>
import {eventBus} from '../main.js'

export default {
  name: 'artists-list',
  props: ['artists'],
  methods: {
    handleClick(mbid) {
      eventBus.$emit('artist-selected', this.artist)
    }
  }
}
</script>

<style lang="css" scoped>
  li:hover {
    opacity: 50%;
  }
</style>
