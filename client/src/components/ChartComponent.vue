<template lang="html">
  <div id="charts">
    <h2>Top of the charts</h2>
    <h4>Top artists</h4>
      <ul>
        <li v-for="artist in topArtists" @click="handleArtistClick(artist)">{{artist}}</li>
      </ul>
    <h4>Top tracks</h4>
      <ul>
        <li v-for="track in topTracks">{{track.name}} by {{track.artist}}
          <button @click="selectPlaylist(track)" type="button">+</button>
          <div v-if="selectedTrack === track">
            <select v-model="selectedPlaylist">
              <option v-for="(playlist, index) in playlists" :key='index' :value='playlist'>{{playlist.name}}</option>
            </select>
            <button @click="addTrack" type="button">Add to playlist</button>
          </div>
        </li>
      </ul>
    <h4>Top tags</h4>
      <ul>
        <li v-for="tag in topTags">{{tag}}</li>
      </ul>
  </div>
</template>

<script>
import {eventBus} from '../main.js';

export default {
  name: 'chart-component',
  props: ['playlists'],
  data() {
    return {
      topTracks: [],
      topArtists: [],
      topTags: [],
      selectedTrack: null,
      selectedPlaylist: null
    };
  },
  mounted() {
    this.fetchTopTags();
    this.fetchTopArtists();
    this.fetchTopTracks();
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
    // move fetches to MusicService (ChartService??)

    fetchTopArtists() {
      fetch('http://ws.audioscrobbler.com/2.0/?method=chart.gettopartists&limit=3&api_key=7c5633ed04fb1140593f4c642ba29c60&format=json')
      .then(res => res.json())
      .then(data => this.topArtists = this.formatArtists(data));
    },
    fetchTopTracks() {
      fetch('http://ws.audioscrobbler.com/2.0/?method=chart.gettoptracks&limit=3&api_key=7c5633ed04fb1140593f4c642ba29c60&format=json')
      .then(res => res.json())
      .then(data => this.topTracks = this.formatTracks(data));
    },
    fetchTopTags() {
      fetch('http://ws.audioscrobbler.com/2.0/?method=chart.gettoptags&limit=3&api_key=7c5633ed04fb1140593f4c642ba29c60&format=json')
      .then(res => res.json())
      .then(data => this.topTags = this.formatTags(data));
    },
    formatArtists(data) {
      const filteredData = data.artists.artist.map(artist => artist.name);
      return filteredData;
    },
    formatTags(data) {
      const filteredData = data.tags.tag.map(tag => tag.name);
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

</style>
