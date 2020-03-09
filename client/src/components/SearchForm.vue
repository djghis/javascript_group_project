<template lang="html">
  <form @submit.prevent="handleClick">
    <label for="">Artist</label>
    <input v-model='artist' type="text" name="" value="">
    <input type="submit" name="" value="Search">
  </form>
</template>

<script>
import { eventBus } from '@/main.js';
export default {
  name: 'search-form',
  components: {

  },
  data() {
    return {
      artist: ''
    }
  },
  methods: {
    handleClick: function () {
      eventBus.$emit('submit-artist', this.artist);
      this.artist = '';
    }
  }
}
</script>

<style lang="css" scoped>
</style>
