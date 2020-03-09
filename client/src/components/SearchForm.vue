<template lang="html">
  <div>


  <form @submit.prevent="handleClickArtist">
    <label for="">Artist</label>
    <input v-model='artist' type="text" name="" value="">
    <input type="submit" name="" value="Search">
  </form>
  <form @submit.prevent="handleClickAlbum">
    <label for="">Album</label>
    <input v-model='album' type="text" name="" value="">
    <input type="submit" name="" value="Search">
  </form>
  <form @submit.prevent="handleClickTrack">
    <label for="">Track</label>
    <input v-model='track' type="text" name="" value="">
    <input type="submit" name="" value="Search">
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
</style>
