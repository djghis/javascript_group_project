<template lang="html">
  <div v-if="artist" id="artistDetails">
    <h3>{{artist.name}}</h3>
    <h4>Similar artists:</h4>
      <ul>
        <li v-for="artist in artist.similar">{{artist}}</li>
      </ul>
    <h4>Top albums:</h4>
      <ul>
        <li v-for="album in topalbums">{{album.name}}</li>
      </ul>
    <h4>Top tracks:</h4>
      <ul>
        <li v-for="track in toptracks">{{track.name}}</li>
      </ul>
  </div>
</template>

<script>
import {eventBus} from '../main.js'

export default {
  name: 'artist-details',
  props: ['artist', 'topalbums', 'toptracks']
}
</script>

<style lang="css" scoped>

  h5 {
    font-weight: lighter;
    font-size: 1em;
  }

</style>
