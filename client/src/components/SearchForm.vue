<template lang="html">
  <div>
  <form @submit.prevent="handleClickArtist">
    <!-- <label for="">Artist</label> -->
    <input v-model='artist' type="text" placeholder="Search for artists">
    <input type="submit" value="Go">
  </form>
  <form @submit.prevent="handleClickAlbum">
    <!-- <label for="">Album</label> -->
    <input v-model='album' type="text" placeholder="Search for albums">
    <input type="submit" value="Go">
  </form>
  <form @submit.prevent="handleClickTrack">
    <!-- <label for="">Track</label> -->
    <input v-model='track' type="text" placeholder="Search for songs">
    <input type="submit" value="Go">
  </form>
</div>
</template>

<script>
import { eventBus } from '@/main.js';
export default {
  name: 'search-form',
  components: {

  },
  data() {
    return {
      artist: '',
      album: '',
      track: ''
    }
  },
  methods: {
    handleClickArtist: function () {
      eventBus.$emit('submit-artist', this.artist);
      this.artist = '';
    },
    handleClickAlbum: function () {
      eventBus.$emit('submit-album', this.album);
      this.album = '';
    },
    handleClickTrack: function () {
      eventBus.$emit('submit-track', this.track);
      this.track = '';
  }
}
}
</script>

<style lang="css" scoped>

form {
  display: inline-block;
  margin-bottom: 1em;
  width: 30%;
}

input {
  height: 2rem;
  font-size: 1.2em;
  padding: 0.5em 1em;
  margin: 0.5em 0.5em;
}

input[type=submit] {
  border-radius: 10px;
  font-size: 0.8em;
  padding: 0.5em 0.5em;
  opacity: 80%;
  color: dimgrey;
}

input[type=submit]:hover {
  opacity: 90%;
  color: green;
}

</style>
