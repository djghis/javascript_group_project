<template lang="html">
<div class="">
  <h2>Album Search</h2>
  <ul>
    <li v-if="album.mbid"  @click="handleClick(album.name, album.artist)" v-for="(album, index) in albums" :key="index">{{album.name}} by {{album.artist}}</li>
  </ul>
</div>
</template>

<script>
import {eventBus} from '@/main.js';

export default {
  name: "albums-list",
  props:['albums'],
  methods: {
    handleClick (album, artist) {
      const data = [album, artist]
      eventBus.$emit('album-selected', data);
    }
  }
};
</script>

<style lang="css" scoped>
</style>
