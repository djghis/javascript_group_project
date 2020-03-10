<template lang="html">
  <div v-if="artist"  id="artistDetails">
    <h3>{{artist.name}}</h3>
    <h4>Similar artists:</h4>
      <ul>
        <li v-for="artist in artist.similar">{{artist}}</li>
      </ul>
    <!-- <h5>{{this.similarArtists}}</h5>
    <h4>Top albums:</h4>
    <h5>{{this.topAlbums}}</h5>
    <h4>Top tracks:</h4>
    <h5>{{this.topTracks}}</h5> -->
  </div>
</template>

<script>
import {eventBus} from '../main.js'

export default {
  name: 'artist-details',
  props: ['artist', 'topalbums', 'toptracks'],
  data() {
    return {
      similar: [],
      topThreeAlbums: [],
      topThreeTracks: []
    }
  }
  //   topAlbums: function() {
  //       const albums = this.topalbums.album.map(album => {
  //         return album.name;
  //     })
  //     return albums.join(", ")
  //   },
  //   topTracks: function() {
  //     const tracks = this.toptracks.track.map(track => {
  //       return track.name;
  //     })
  //     return tracks.join(", ")
  //   }
  // }
}
</script>

<style lang="css" scoped>

  h5 {
    font-weight: lighter;
    font-size: 1em;
  }

</style>
