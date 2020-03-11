<template lang="html">
  <div id="playlist">
    <h2>Your playlists</h2>
    <form @submit.prevent="handleSubmit">
      <label>New playlist </label>
      <input required v-model='name' type="text">
      <input type="submit" value="+"/>

    </form>
      <ul>
        <li v-for="playlist in playlists"><details><summary>{{playlist.name}}</summary><br>
          <li v-for="track in playlist.tracks"><span class="bolder">{{track.name}}</span> by {{track.artist}}
          <button @click.prevent="handleDeleteTrack(playlist, track)" type="button">X</button>
          </li>
          <button @click.prevent="handleDeletePlaylist(playlist._id)" type="button" name="Delete">Delete playlist</button>
        </details></li>

      </ul>

  </div>
</template>

<script>
import PlaylistService from '../services/PlaylistService.js';
import {eventBus} from '@/main.js';

export default {
  name: 'playlist',
  props: ['playlists'],
  data() {
    return {
      name: ''
    }
  },
  methods: {
    handleSubmit: function () {
      const payload = {name: this.name, tracks: []};
      eventBus.$emit('add-playlist', payload);
    },
    handleDeletePlaylist: function (id) {
      eventBus.$emit('delete-playlist', id);
    },
    handleDeleteTrack: function (playlist, track) {
      eventBus.$emit('delete-track', playlist, track);
    }
  }
}
</script>

<style lang="css" scoped>
  li {
    color: #EAF6FF;
  }
  input[type=text] {
    height: 0.6rem;
    border-radius: 15px;
    /* font-size: 1.2em; */
    padding: 0.5em 1em;
    margin: 0.5em 0.5em;
    /* width: 43%;
    opacity: 85%; */
  }
</style>
