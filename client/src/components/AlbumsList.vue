<template lang="html">
<div class="">
  <h2>Album Search</h2>
  <ul>
    <li v-if="album.mbid" v-for="(album, index) in albums" :key="index"><span class="bolder">{{album.name}}</span> by {{album.artist}}
      <details @toggle="handleClick(album.name, album.artist)"><summary>Tracks</summary>
        <ul>
          <li v-for="track in tracks">{{track.name}}
            <button class="plus" @click="selectPlaylist(track)" type="button">+</button>
            <div v-if="selectedTrack === track">
              <select v-model="selectedPlaylist">
                <option v-for="(playlist, index) in playlists" :key='index' :value='playlist'>{{playlist.name}}</option>
              </select>
              <button @click="addTrackFromDropdown" type="button">Add to playlist</button>
            </div>
          </li>
        </ul>
      </details>
    </li>
  </ul>
</div>
</template>

<script>
import {eventBus} from '@/main.js';

export default {
  name: "albums-list",
  props:['albums', 'tracks', 'playlists'],
  data() {
    return {
      selectedTrack: null,
      selectedPlaylist: null
    }
  },
  methods: {
    handleClick (album, artist) {
      const data = [album, artist]
      eventBus.$emit('album-selected', data);
    },
    selectPlaylist(track) {
      this.selectedTrack = track;
    },
    addTrackFromDropdown() {
      const data = [this.selectedTrack, this.selectedPlaylist];
      eventBus.$emit('add-track-to-playlist', data);
    }
  }
};
</script>

<style lang="css" scoped>

</style>
