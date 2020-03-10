<template lang="html">
<div class="">
  <ul>
    <li v-for="(track, index) in tracks" :key="index">{{track.name}} by {{track.artist}}
      <button @click="getForm(track)" type="button" name="add">+</button>
      <div v-if="selectedTrack === track">
        <select v-model="selectedPlaylist">
          <option v-for="(playlist, index) in playlists" :key='index' :value='playlist'>{{playlist.name}}</option>
        </select>
        <button @click="addTrack" type="button">Add to playlist</button>
      </div>
    </li>
  </ul>
</div>
</template>

<script>
import {eventBus} from '@/main.js'
export default {
  name: "tracks-list",
  props:['tracks', 'playlists'],
  data() {
    return {
      selectedTrack: null,
      selectedPlaylist: null
    }
  },
  methods: {
    getForm: function(track) {
      this.selectedTrack = track
    },
    addTrack: function() {
      const data = [this.selectedTrack, this.selectedPlaylist]
      eventBus.$emit('add-track-to-playlist', data)
    }
  }
}

</script>

<style lang="css" scoped>
</style>
