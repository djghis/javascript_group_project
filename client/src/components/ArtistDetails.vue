<template lang="html">
  <div v-if="artist" id="artistDetails">
    <h2>Artist Details</h2>
    <h3>{{artist.name}}</h3>
    <h5>Similar artists:</h5>
      <ul>
        <li v-for="artist in artist.similar" @click="handleArtistClick(artist)">{{artist}}</li>
      </ul>
    <h5>Top albums:</h5>
      <ul>
        <li v-for="album in topalbums">{{album.name}}
          <details @toggle="handleAlbumClick(album.name, album.artist.name)"><summary>Tracks</summary>
            <ul>
              <li v-for="track in tracks"><span class="bolder">{{track.name}}</span>
                <button @click="selectPlaylist(track)" type="button">+</button>
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
    <h5>Top tracks:</h5>
      <ul>
        <li v-for="track in toptracks">{{track.name}}
          <button class="plus" @click="selectPlaylist(track)" type="button">+</button>
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
import {eventBus} from '../main.js';

export default {
  name: 'artist-details',
  props: ['artist', 'topalbums', 'toptracks', 'playlists', 'tracks'],
  data() {
    return {
      selectedTrack: null,
      selectedPlaylist: null
    }
  },
  methods: {
    handleArtistClick(artist) {
      eventBus.$emit('artist-selected', {name: artist})
    },
    handleAlbumClick (name, artist) {
      const data = [name, artist]
      eventBus.$emit('album-selected', data);
    },
    selectPlaylist(track) {
      this.selectedTrack = track;
    },
    addTrack() {
      let track = Object.assign(this.selectedTrack, { artist: this.selectedTrack.artist.name});
      console.log(track);
      const data = [track, this.selectedPlaylist];
      eventBus.$emit('add-track-to-playlist', data);
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
