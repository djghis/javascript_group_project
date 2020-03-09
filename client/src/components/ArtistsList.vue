<template lang="html">
  <div class="">
    <ul>
      <li @click="handleClick()" v-for='(artist, index) in artists' :value="index" :key='index'>{{artist.name}}</li>
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
    handleClick() {
      eventBus.$emit('artist-selected', this.artists[event.target.value])
      console.log(this.artists[event.target.value])
    }
  }
}
</script>

<style lang="css" scoped>
  li:hover {
    opacity: 50%;
  }
</style>
