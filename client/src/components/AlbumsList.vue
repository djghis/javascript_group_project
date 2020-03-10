<template lang="html">
<div class="">
  <ul>
    <li v-if="album.mbid"  @click="handleClick(album.mbid)" v-for="(album, index) in albums" :key="index">{{album.name}} by {{album.artist}}</li>
  </ul>
</div>
</template>

<script>
import {eventBus} from '@/main.js';

export default {
  name: "albums-list",
  props:['albums'],
  methods: {
    handleClick (mbid) {
      eventBus.$emit('album-selected', mbid);
    }
  }
};
</script>

<style lang="css" scoped>
</style>
