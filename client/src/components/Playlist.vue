<template lang="html">
  <div id="playlist">
    <h2>Your playlists</h2>
      <ul>
        <li v-for="playlist in myPlaylists"><details><summary>{{playlist.name}}</summary><br>
          <li v-for="track in playlist.tracks">{{track.name}} by {{track.artist}}</li>
        </details></li>
      </ul>
    <form @submit.prevent="handleSubmit">
      <label for="">Playlist</label>
      <input v-model='name' type="text">
      <input type="submit" name="" value="Add">
    </form>
  </div>
</template>

<script>
import PlaylistService from '../services/PlaylistService.js';
import {eventBus} from '@/main.js';

export default {
  name: 'playlist',
  props: ['playlist'],
  data() {
    return {
      name: '',
      myPlaylists: []
    }
  },
  mounted() {
    this.fetchPlaylists()
  },
  methods: {
    handleSubmit: function () {
      const payload = {name: this.name, tracks: []}
      eventBus.$emit('add-playlist', payload)
      this.myPlaylists.push(payload)
    },
    fetchPlaylists: function() {
      PlaylistService.getPlaylists()
      .then(res => this.myPlaylists = res)
    }
  }
}
</script>

<style lang="css" scoped>

</style>
