<template lang="html">
  <div id="charts">
    <h2>Top of the charts</h2>
    <!-- <br> -->
    <h4>Top artists</h4>
      <ul>
        <li v-for="artist in topArtists" @click="handleArtistClick(artist)">{{artist}}</li>
      </ul>
      <!-- <br> -->
    <h4>Top tracks</h4>
      <ul >
        <li class="list" v-for="track in topTracks"><span class="bolder">{{track.name}}</span> by {{track.artist}}
          <button class="plus" @click="selectPlaylist(track)" type="button">+</button>
          <div v-if="selectedTrack === track">
            <select required v-model="selectedPlaylist">
              <option v-for="(playlist, index) in playlists" :key='index' :value='playlist'>{{playlist.name}}</option>
            </select>
            <button @click="addTrack" type="button">Add to playlist</button>
          </div>
        </li>
      </ul>
      <br>
  </div>
</template>

<script>
import MusicService from '../services/MusicService.js';
import {eventBus} from '../main.js';

export default {
  name: 'chart-component',
  props: ['playlists'],
  data() {
    return {
      topTracks: [],
      topArtists: [],
      selectedTrack: null,
      selectedPlaylist: null
    };
  },
  mounted() {
    MusicService.fetchTopArtists()
      .then(data => this.topArtists = this.formatArtists(data));
    MusicService.fetchTopTracks()
      .then(data => this.topTracks = this.formatTracks(data));
  },
  methods: {
    handleArtistClick(artist) {
      eventBus.$emit('artist-selected', {name: artist})
    },
    selectPlaylist(track) {
      this.selectedTrack = track;
    },
    addTrack() {
      const data = [this.selectedTrack, this.selectedPlaylist];
      eventBus.$emit('add-track-to-playlist', data);
    },
    formatArtists(data) {
      const filteredData = data.artists.artist.map(artist => artist.name);
      return filteredData;
    },
    formatTracks(data){
      return data.tracks.track.map((track) => (
        {name: track.name, artist: track.artist.name}
      ));
    }
  }
}
</script>

<style lang="css" scoped>
  .list:hover {
    color: #EAF6FF;
    cursor: default;
  }



  /* select:required:invalid {
  color: gray;
}
option[value=""][disabled] {
  display: none;
}
option {
  color: black;
} */

</style>
