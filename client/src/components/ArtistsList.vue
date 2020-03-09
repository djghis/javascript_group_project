<template lang="html">
  <div class="">
    <ul>
      <li @click="handleClick(artist)" v-for='(artist, index) in artists' :key='index'>{{artist.name}}</li>
    </ul>
  </div>

</template>

<script>
import {eventBus} from '../main.js';
import ArtistDetails from './ArtistDetails.vue';

export default {
  name: 'artists-list',
  props: ['artists'],
  methods: {
    handleClick(artist) {
      eventBus.$emit('artist-selected', artist)
    }
  }
}
</script>

<style lang="css" scoped>

  li:hover {
    opacity: 50%;
  }
  
</style>
