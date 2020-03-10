<template lang="html">
  <div v-if="artist" id="artistDetails">
    <h3>{{artist.name}}</h3>
    <h5>Similar artists:</h5>
      <ul>
        <li v-for="artist in artist.similar">{{artist}}</li>
      </ul>
    <h5>Top albums:</h5>
      <ul>
        <li v-for="album in topalbums">{{album.name}}</li>
      </ul>
    <h5>Top tracks:</h5>
      <ul>
        <li v-for="track in toptracks">{{track.name}}</li>
      </ul>
  </div>
</template>

<script>
import {eventBus} from '../main.js';

export default {
  name: 'artist-details',
  props: ['artist', 'topalbums', 'toptracks']
};
</script>

<style lang="css" scoped>
</style>
